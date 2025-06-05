import rng from '../rng.js';
import verifyStatus from "../player/verifyStatus.js";

export default function createMetheor() {
  let posX = window.innerWidth;
  const map = document.getElementById('game');
  let metheorBox = document.createElement('span');
  metheorBox.classList.add('metheor');

  const maxTop = window.innerHeight - 100;
  let position = rng(100, maxTop);
  metheorBox.style.transform = `translate(${posX}px, ${position}px)`;
  function start() {
    map.appendChild(metheorBox);
    moveMetheor();
  }
  function moveMetheor() {
    let status = verifyStatus();
    if(status === 'death') {
      cancelAnimationFrame(moveMetheor);
      return;
    }
    posX -= 5;
    metheorBox.style.transform = `translate(${posX}px, ${position}px)`;
    if (posX > -100) {
      requestAnimationFrame(moveMetheor);
    }
  }
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    start();
  } else {
    document.addEventListener('DOMContentLoaded', start);
  }
}