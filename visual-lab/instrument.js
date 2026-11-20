import {
  BoxGeometry, BufferGeometry, DoubleSide, Group, LatheGeometry, LineBasicMaterial, LineLoop,
  Mesh, OrthographicCamera, PlaneGeometry, Scene, ShaderMaterial, Vector2, Vector3, WebGLRenderer
} from 'three';

const TURN = Math.PI * 2;
const PLATE = 2.32;
const DIAMETER = 5.52;
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
  uniform float uRadial;
  varying vec3 vNormal;
  varying vec3 vPosition;

  void main() {
    vec3 normal = normalize(vNormal);
    float key = max(0.0, dot(normal, normalize(vec3(-0.65, 0.45, 0.9))));
    float rim = pow(max(0.0, dot(normal, normalize(vec3(0.15, -0.7, 0.5)))), 4.0);
    float direction = mix(vPosition.y * 0.9, length(vPosition.xy), uRadial);
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
    vec3 detail = vec3(0.71, 0.76, 0.68) * (0.15 * ray + 0.37 * ring + 0.32 * smallRings + 0.22 * ticks + 0.34 * longTicks + 0.42 * core + 0.24 * scaleDots);
    vec3 signal = vec3(0.57, 0.76, 0.43) * (0.25 * sweep + 0.57 * beam) * (1.0 - uArchive);
    float trace = 0.75 + 0.25 * cos(10.0 * angle - radius * 31.0 + uBuild * 9.0);
    vec3 colour = neutral + detail * mix(1.0, 0.7, uArchive) * trace + signal + grit;
    gl_FragColor = vec4(colour, circle * uAlpha);
  }
`;

// The pressure-machined rings and signal face share a local coordinate system.
function metal(brightness, radial) {
  return new ShaderMaterial({
    vertexShader: vertex, fragmentShader: metalFragment,
    uniforms: { uAlpha: { value: 1 }, uBright: { value: brightness }, uRadial: { value: Number(radial) } },
    transparent: true, toneMapped: false
  });
}

function disc(archive) {
  const material = new ShaderMaterial({
    vertexShader: vertex, fragmentShader: dialFragment, side: DoubleSide,
    uniforms: { uAlpha: { value: 1 }, uSweep: { value: 0 }, uBuild: { value: 1 }, uArchive: { value: Number(archive) } },
    transparent: true, toneMapped: false
  });
  return new Mesh(new PlaneGeometry(PLATE * 2, PLATE * 2), material);
}

function lathe(points, material) {
  const geometry = new LatheGeometry(points.map(([radius, depth]) => new Vector2(radius, depth)), 160);
  geometry.rotateX(Math.PI / 2);
  return new Mesh(geometry, material);
}

function createDial() {
  const group = new Group();
  const edge = metal(0.97, true);
  const inner = metal(1.47, true);
  const base = lathe([
    [2.28, -.27], [2.48, -.28], [2.68, -.18], [2.75, -.09], [2.75, .0],
    [2.69, .065], [2.51, .112], [2.4, .1], [2.32, .045], [2.28, -.27]
  ], edge);
  const rim = lathe([
    [2.305, .026], [2.365, .045], [2.402, .105], [2.46, .135], [2.54, .124],
    [2.6, .10], [2.54, .081], [2.38, .048], [2.305, .026]
  ], inner);
  const cap = lathe([
    [2.58, .076], [2.63, .126], [2.68, .127], [2.72, .086], [2.69, .06], [2.58, .076]
  ], edge);
  const top = disc(false);
  const archive = disc(true);
  group.add(base, rim, cap, archive, top);

  return {
    group,
    render(state, alpha, fold) {
      const { build, compare, pitch, yaw, sweep } = state;
      group.visible = alpha > .005;
      edge.uniforms.uAlpha.value = inner.uniforms.uAlpha.value = alpha;
      base.position.z = -(1 - build) * 2.35;
      rim.position.z = (1 - build) * 1.45;
      cap.position.z = (1 - build) * 2.95;
      base.rotation.z = (1 - build) * .28;
      rim.rotation.y = (1 - build) * .78;
      cap.rotation.x = (1 - build) * -.72;
      top.position.z = .108 + compare * .43 + (1 - build) * .67;
      top.position.y = compare * .33;
      top.material.uniforms.uAlpha.value = alpha * smooth(.12, .72, build);
      top.material.uniforms.uSweep.value = sweep;
      top.material.uniforms.uBuild.value = build;
      archive.visible = compare > .004;
      archive.position.set(0, -.64 * compare, -.36 - compare * .24);
      archive.material.uniforms.uAlpha.value = Math.min(1, compare * 1.4) * alpha;
      group.rotation.set(
        .25 + pitch + .33 * compare + .94 * fold + (1 - build) * .55,
        -.28 + yaw + (1 - build) * .78 + .41 * fold,
        -.22 + .88 * fold + (1 - build) * 1.14
      );
      group.scale.setScalar(mix(.45, 1, smooth(0, .85, build)) * mix(1, .65, fold));
    },
    point(signal, target) {
      const surface = archive.visible && signal.days < 0 ? archive : top;
      target.set(signal.x * PLATE * .975, -signal.y * PLATE * .975 + surface.position.y, surface.position.z + .01);
      return group.localToWorld(target);
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
  const material = metal(1.78, false);
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
    const homeScale = Math.min(radar.width * .955, radar.height * .97) / DIAMETER;
    const deckScale = Math.min(system.width * .98, system.height * 1.06) / DIAMETER;
    const x = mix(mix(stage.width * .50, radar.x, fly), system.x, fold);
    const y = mix(mix(stage.height * .47, radar.y, fly), system.y, fold);
    rig.position.set(x - stage.width / 2, stage.height / 2 - y, 0);
    const scale = mix(homeScale, deckScale, fold) * mix(1.16, 1, fly);
    rig.scale.setScalar(scale);
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
