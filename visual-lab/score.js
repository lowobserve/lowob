const TAU = Math.PI * 2;
const stations = [[.5, .19], [.81, .49], [.5, .8], [.19, .49]];

export function commercialScore(figure) {
  const canvas = figure.querySelector('canvas');
  const context = canvas.getContext('2d');
  const links = [...figure.querySelectorAll('.vl-station')];
  const output = figure.querySelector('.vl-score-output');
  const chapterLinks = [...figure.closest('.vl-system-score').querySelectorAll('.vl-chapter-rail a')];
  const model = { phase: 0 };
  let width = 0;
  let height = 0;
  let ratio = 1;
  let current = -1;

  function paint() {
    const chapter = Math.max(0, Math.min(3, Math.floor(model.phase)));
    if (current !== chapter) {
      current = chapter;
      for (const navigation of [links, chapterLinks]) {
        navigation.forEach((link, index) => {
          if (index === chapter) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        });
      }
      output.textContent = links[chapter].dataset.output;
    }
    if (!context || !width || !height) return;
    const ctx = context;
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    ctx.clearRect(0, 0, width, height);

    const span = Math.min(width, height);
    const cx = width * .5;
    const cy = height * .49;
    const start = model.phase * TAU / 4 - TAU / 4;

    // The contours share a center but progressively change bearing with the story.
    for (let layer = 0; layer < 19; layer++) {
      const t = layer / 18;
      const rx = span * (.075 + .167 * t);
      const ry = rx * (.30 + t * .36);
      const twist = .95 * t + start * .7;
      ctx.beginPath();
      ctx.ellipse(cx, cy, rx, ry, twist, 0, TAU);
      ctx.strokeStyle = 'rgba(224,229,221,' + (.26 + t * .30) + ')';
      ctx.stroke();
    }

    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.ellipse(cx, cy, width * .31, height * .305, 0, 0, TAU);
    ctx.strokeStyle = '#aeb5a960';
    ctx.stroke();
    ctx.beginPath();
    ctx.ellipse(cx, cy, width * .345, height * .34, 0, 0, TAU);
    ctx.setLineDash([1, 5]);
    ctx.strokeStyle = '#aeb5a94c';
    ctx.stroke();
    ctx.setLineDash([]);

    for (const [i, [nx, ny]] of stations.entries()) {
      const [x, y] = [nx * width, ny * height];
      const angle = i * TAU / 4 - TAU / 4;
      ctx.beginPath();
      ctx.moveTo(cx + Math.cos(angle) * span * .18, cy + Math.sin(angle) * span * .18);
      ctx.lineTo(x, y);
      ctx.strokeStyle = '#aeb5a92e';
      ctx.stroke();
    }

    // The segment starts at the current station and advances towards its handoff.
    ctx.beginPath();
    const lead = (chapter * TAU / 4) - TAU / 4;
    const sweep = .16 + Math.min(1, model.phase - chapter) * 1.41;
    ctx.ellipse(cx, cy, width * .31, height * .305, 0, lead, lead + sweep);
    ctx.lineWidth = 1.6;
    ctx.strokeStyle = '#b1f59c';
    ctx.stroke();
    ctx.lineWidth = 1;
  }

  function resize() {
    width = canvas.clientWidth;
    height = canvas.clientHeight;
    if (!width || !height) return;
    ratio = Math.min(devicePixelRatio || 1, 1.75);
    canvas.width = Math.round(width * ratio);
    canvas.height = Math.round(height * ratio);
    paint();
  }

  if (context) {
    resize();
    if ('ResizeObserver' in window) new ResizeObserver(resize).observe(canvas);
    else window.addEventListener('resize', resize);
  }
  paint();
  return { model, paint };
}
