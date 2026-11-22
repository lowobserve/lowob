import {
  BoxGeometry, BufferGeometry, Group, LineBasicMaterial, LineLoop,
  Mesh, OrthographicCamera, PlaneGeometry, Scene, ShaderMaterial, Vector3, WebGLRenderer
} from 'three';

const TURN = Math.PI * 2;
const PLATE = 2.32;
const PLATE_RIM = PLATE + .018;
const DIAL_DIAMETER = PLATE_RIM * 2;
const MARK_DIAMETER = 5.52;
const COMPARE_SCALE = .45;
const COMPARE_OFFSET = DIAL_DIAMETER * .255;
const mix = (a, b, amount) => a + (b - a) * amount;
const smooth = (start, end, value) => {
  const t = Math.min(1, Math.max(0, (value - start) / (end - start)));
  return t * t * (3 - 2 * t);
};

const vertex = /* glsl */ `
  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vPosition;

  void main() {
    vUv = uv;
    vPosition = position;
    vNormal = normalize(normalMatrix * normal);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const metalFragment = /* glsl */ `
  uniform float uAlpha;
  uniform float uBright;
  varying vec3 vNormal;
  varying vec3 vPosition;

  void main() {
    vec3 normal = normalize(vNormal);
    float key = max(0.0, dot(normal, normalize(vec3(-0.65, 0.45, 0.9))));
    float rim = pow(max(0.0, dot(normal, normalize(vec3(0.15, -0.7, 0.5)))), 4.0);
    float direction = vPosition.y * 0.9;
    float footprint = max(0.0001, fwidth(direction));
    float milling = sin(direction * 510.0) * 0.038 * exp(-footprint * 185.0)
      + sin(direction * 187.0) * 0.039 * exp(-footprint * 67.0);
    float bands = sin(vPosition.x * 1.82 + vPosition.y * 1.7 + vPosition.z * 1.9);
    float highlight = pow(max(0.0, bands), 8.0) * 0.14;
    float shade = clamp(0.055 + key * 0.36 + rim * 0.44 + milling + highlight, 0.0, 1.0);
    vec3 colour = vec3(0.031, 0.037, 0.029) + shade * vec3(0.85, 0.88, 0.82) * uBright;
    gl_FragColor = vec4(colour, uAlpha);
  }
`;

const dialFragment = /* glsl */ `
  uniform float uAlpha;
  uniform float uSweep;
  uniform float uBuild;
  uniform float uArchive;
  varying vec2 vUv;

  float hairline(float value, float width) {
    return 1.0 - smoothstep(width, width + fwidth(value) * 1.25, abs(value));
  }

  void main() {
    vec2 point = vUv * 2.0 - 1.0;
    float radius = length(point);
    float circle = 1.0 - smoothstep(0.994, 1.0, radius);
    if (circle <= 0.0) discard;
    float angle = atan(point.y, point.x);
    float halo = min(1.0, length(point - vec2(-0.45, 0.62)));
    float fine = fract(sin(dot(gl_FragCoord.xy, vec2(13.71, 19.127))) * 47263.077);
    float grit = (fine - 0.5) * 0.019;
    float ray = hairline(sin(angle * 4.0) * radius, 0.0014) * smoothstep(0.14, 0.24, radius);
    float ticks = hairline(sin(angle * 104.0), 0.035) * step(0.952, radius);
    float longTicks = hairline(sin(angle * 13.0), 0.035) * step(0.922, radius);
    float smallRings = hairline(radius - 0.27, 0.00065) + hairline(radius - 0.49, 0.00065) + hairline(radius - 0.76, 0.00065);
    float ring = hairline(radius - 0.982, 0.0012) + hairline(radius - 0.91, 0.0007);
    float core = hairline(radius - 0.14, 0.0014) + 1.0 - smoothstep(0.004, 0.012, radius);
    float scaleDots = hairline(radius - 0.625, 0.001) * hairline(sin(angle * 54.0), 0.15);
    float trail = mod(uSweep - angle + 6.2831853, 6.2831853);
    float sweep = exp(-trail * 4.9) * (1.0 - step(1.22, trail)) * smoothstep(0.045, 0.35, radius);
    float beam = hairline(sin(trail) * radius, 0.0015) * (1.0 - step(0.15, trail));
    vec3 neutral = vec3(0.025, 0.03, 0.023) + (1.0 - halo) * vec3(0.047, 0.055, 0.04);
    vec3 detail = vec3(0.71, 0.76, 0.68) * (0.15 * ray + mix(0.37, 0.19, smoothstep(0.98, 1.0, uBuild)) * ring + 0.32 * smallRings + 0.22 * ticks + 0.34 * longTicks + 0.42 * core + 0.24 * scaleDots);
    vec3 signal = vec3(0.57, 0.76, 0.43) * (0.25 * sweep + 0.57 * beam) * (1.0 - uArchive);
    float trace = 0.75 + 0.25 * cos(10.0 * angle - radius * 31.0 + uBuild * 9.0);
    vec3 colour = neutral + detail * mix(1.0, 0.7, uArchive) * trace + signal + grit;
    gl_FragColor = vec4(colour, circle * uAlpha);
  }
`;

function metal(brightness) {
  return new ShaderMaterial({
    vertexShader: vertex, fragmentShader: metalFragment,
    uniforms: { uAlpha: { value: 1 }, uBright: { value: brightness } },
    transparent: true, toneMapped: false
  });
}

function disc(archive) {
  const material = new ShaderMaterial({
    vertexShader: vertex, fragmentShader: dialFragment,
    uniforms: { uAlpha: { value: 1 }, uSweep: { value: 0 }, uBuild: { value: 1 }, uArchive: { value: Number(archive) } },
    transparent: true, toneMapped: false
  });
  return new Mesh(new PlaneGeometry(PLATE * 2, PLATE * 2), material);
}

function createDial() {
  const group = new Group();
  const live = new Group();
  const past = new Group();
  const face = disc(false);
  const archive = disc(true);
  const rim = track(PLATE_RIM, .5);
  const archiveRim = track(PLATE_RIM, .4);
  rim.position.z = archiveRim.position.z = .01;
  live.add(face, rim);
  past.add(archive, archiveRim);

  // The opening lines converge in the same plane as the radar face.
  const traces = [
    { circle: track(PLATE * .49, 0), x: -.94, y: .28, scale: 1.52 },
    { circle: track(PLATE * .76, 0), x: .56, y: -.40, scale: 1.16 },
    { circle: track(PLATE_RIM, 0), x: .13, y: .52, scale: .68 }
  ];
  group.add(past, live, ...traces.map(trace => trace.circle));

  return {
    group,
    render({ build, compare, sweep }, alpha, fold) {
      group.visible = alpha > .005;
      group.scale.setScalar(mix(.5, 1, smooth(0, .85, build)) * mix(1, .43, fold));
      live.position.x = -COMPARE_OFFSET * compare;
      live.scale.setScalar(mix(1, COMPARE_SCALE, compare));
      face.material.uniforms.uAlpha.value = alpha * smooth(.16, .84, build);
      face.material.uniforms.uSweep.value = sweep;
      face.material.uniforms.uBuild.value = build;
      rim.material.opacity = (.55 - .29 * smooth(.98, 1, build)) * alpha * smooth(.45, .91, build);

      past.visible = compare > .004;
      past.position.x = COMPARE_OFFSET * compare;
      past.scale.setScalar(COMPARE_SCALE);
      archive.material.uniforms.uAlpha.value = alpha * smooth(.08, .84, compare);
      archiveRim.material.opacity = .4 * archive.material.uniforms.uAlpha.value;

      for (const { circle, x, y, scale } of traces) {
        circle.visible = build < .98;
        circle.position.set(x * (1 - build), y * (1 - build), .025);
        circle.scale.setScalar(mix(scale, 1, build));
        circle.material.opacity = .64 * alpha * (1 - smooth(.45, .98, build));
      }
    },
    point(signal, target) {
      const surface = past.visible && signal.days < 0 ? past : live;
      target.set(signal.x * PLATE * .975, -signal.y * PLATE * .975, .02);
      return target.applyMatrix4(surface.matrixWorld);
    }
  };
}

function track(radius, opacity) {
  const vertices = [];
  for (let i = 0; i < 128; i++) {
    const step = i / 128 * TURN;
    vertices.push(new Vector3(Math.cos(step) * radius, Math.sin(step) * radius, 0));
  }
  const geometry = new BufferGeometry().setFromPoints(vertices);
  const material = new LineBasicMaterial({ color: 0xb9c5af, opacity, transparent: true, toneMapped: false });
  return new LineLoop(geometry, material);
}

function createMark() {
  const group = new Group();
  const orbit = new Group();
  const mark = new Group();
  const material = metal(1.78);
  const bar = new BoxGeometry(.258, 1.18, .27);
  const bars = Array.from({ length: 8 }, (_, index) => {
    const arm = new Group();
    const blade = new Mesh(bar, material);
    blade.position.y = 1.32;
    arm.rotation.z = index * TURN / 8;
    arm.add(blade);
    mark.add(arm);
    return blade;
  });

  const rings = Array.from({ length: 8 }, (_, index) => {
    const ring = track(1.66 + index * .074, .18);
    orbit.add(ring);
    return ring;
  });
  group.add(orbit, mark);

  return {
    group,
    render(phase, reveal) {
      group.visible = reveal > .004;
      group.scale.setScalar(mix(.34, 1, reveal));
      material.uniforms.uAlpha.value = reveal;
      mark.rotation.set(.39 + .3 * Math.sin(phase * 1.4), -.28 + phase * .55, .22 - phase * .75);
      orbit.rotation.set(.64 + .16 * Math.sin(phase * 2), -.21, -.36 + phase * .17);
      rings.forEach((ring, index) => {
        ring.material.opacity = reveal * (.15 + .038 * index);
        ring.rotation.y = index * .142 - .39 + phase * .25;
        ring.rotation.x = index * .13 + phase * .16;
      });
      bars.forEach((blade, index) => {
        const ripple = Math.sin(index * TURN / 8 + phase * 2.3);
        blade.position.z = .26 * ripple;
        blade.position.y = 1.33 + .17 * ripple;
        blade.rotation.x = .22 * ripple;
      });
    }
  };
}

function relativeCenter(anchor, box) {
  const rect = anchor.getBoundingClientRect();
  return {
    x: rect.left - box.left + rect.width / 2,
    y: rect.top - box.top + rect.height / 2,
    width: rect.width,
    height: rect.height
  };
}

export function mountInstrument({ mount, aperture, bench, pinned }) {
  const renderer = new WebGLRenderer({
    alpha: true, antialias: true, powerPreference: 'low-power'
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
  renderer.setClearColor(0, 0);
  renderer.domElement.setAttribute('aria-hidden', 'true');
  mount.append(renderer.domElement);

  const camera = new OrthographicCamera(-1, 1, 1, -1, 1, 7000);
  camera.position.z = 3200;
  const scene = new Scene();
  const rig = new Group();
  const dial = createDial();
  const mark = pinned ? createMark() : null;
  rig.add(dial.group);
  if (mark) rig.add(mark.group);
  scene.add(rig);

  const point = new Vector3();
  let stage;
  let radar;
  let system;

  function measure() {
    stage = mount.getBoundingClientRect();
    if (!stage.width || !stage.height) return;
    radar = relativeCenter(aperture, stage);
    system = pinned ? relativeCenter(bench, stage) : radar;
    renderer.setSize(stage.width, stage.height, false);
    camera.left = -stage.width / 2;
    camera.right = stage.width / 2;
    camera.top = stage.height / 2;
    camera.bottom = -stage.height / 2;
    camera.updateProjectionMatrix();
  }

  function render(state) {
    if (!radar) return;
    const { dock, travel, build } = state;
    const fold = smooth(.18, .98, travel);
    const fly = pinned ? dock : 1;
    const homeScale = Math.min(radar.width * .955, radar.height * .97) / DIAL_DIAMETER;
    const deckScale = Math.min(system.width * .98, system.height * 1.06) / MARK_DIAMETER;
    const x = mix(mix(stage.width * .50, radar.x, fly), system.x, fold);
    const y = mix(mix(stage.height * .47, radar.y, fly), system.y, fold);
    rig.position.set(x - stage.width / 2, stage.height / 2 - y, 0);
    const scale = mix(homeScale, deckScale, fold) * mix(1.16, 1, fly);
    rig.scale.setScalar(scale);
    // Follow the moving radar with a small opaque circle; never mask the viewport.
    if (pinned) {
      const dialScale = mix(.5, 1, smooth(0, .85, build)) * mix(1, .43, fold);
      const radius = PLATE_RIM * scale * dialScale + 9;
      mount.style.setProperty('--lab-mask-x', x.toFixed(2) + 'px');
      mount.style.setProperty('--lab-mask-y', y.toFixed(2) + 'px');
      mount.style.setProperty('--lab-mask-radius', Math.max(12, radius).toFixed(2) + 'px');
    }
    dial.render(state, smooth(.023, .61, build) * (1 - smooth(.49, 1.0, fold)), fold);
    mark?.render(Math.max(0, travel - .70), smooth(.28, .96, fold));
    renderer.render(scene, camera);
  }

  function project(signal) {
    dial.point(signal, point).project(camera);
    return [
      (point.x + 1) / 2 * stage.width - radar.x + radar.width / 2,
      (1 - point.y) / 2 * stage.height - radar.y + radar.height / 2
    ];
  }

  function dispose() {
    const geometries = new Set();
    const materials = new Set();
    scene.traverse(object => {
      if (object.geometry) geometries.add(object.geometry);
      if (object.material) materials.add(object.material);
    });
    geometries.forEach(geometry => geometry.dispose());
    materials.forEach(material => material.dispose());
    renderer.dispose();
    renderer.domElement.remove();
  }

  measure();
  return { render, measure, project, dispose, canvas: renderer.domElement };
}
