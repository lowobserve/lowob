import { gsap } from 'gsap';

const map = document.querySelector('.vl-loop');

if (map) {
  const replay = map.querySelector('.vl-trace');
  const nodes = [...map.querySelectorAll('.vl-loop-node')];
  const returnLine = map.querySelector('.vl-loop-return');
  const motion = gsap.matchMedia();

  motion.add('(prefers-reduced-motion: no-preference)', () => {
    replay.hidden = false;
    const timeline = gsap.timeline({ paused: true });
    for (const node of nodes) {
      timeline.fromTo(node, { '--vl-energy': 0 }, {
        '--vl-energy': 1,
        duration: .21,
        ease: 'power1.out'
      }).to(node, { '--vl-energy': 0, duration: .38, ease: 'power1.in' }, '>-.03');
    }
    timeline.fromTo(returnLine, { '--vl-return': 0 }, {
      '--vl-return': 1,
      duration: .55,
      ease: 'power2.inOut'
    }).to(returnLine, { '--vl-return': 0, duration: .25, ease: 'power1.in' }, '+=.18');

    const play = () => timeline.restart();
    replay.addEventListener('click', play);
    return () => {
      replay.hidden = true;
      replay.removeEventListener('click', play);
    };
  });
}
