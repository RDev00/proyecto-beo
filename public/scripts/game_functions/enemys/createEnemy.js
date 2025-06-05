import rng from '../rng.js';
import verifyStatus from "../player/verifyStatus.js";

export default function createEnemy() {
  let posX = window.innerWidth;
  let typeEnemy = rng(0, 1);
  const map = document.getElementById('game');
  let enemyBox = document.createElement('span');
  enemyBox.classList.add('enemy');
  if (typeEnemy === 1) {
    enemyBox.classList.add('enemy01');
  } else {
    enemyBox.classList.add('enemy02');
  }

  const maxTop = window.innerHeight - 100;
  let position = rng(100, maxTop);
  enemyBox.style.transform = `translate(${posX}px, ${position}px)`;
  function start() {
    map.appendChild(enemyBox);
    moveEnemy();
  }
  function moveEnemy() {
    let status = verifyStatus();
    if(status === 'death') {
      cancelAnimationFrame(moveEnemy);
      return;
    }
    posX -= 5;
    enemyBox.style.transform = `translate(${posX}px, ${position}px)`;
    if (posX > -100) {
      requestAnimationFrame(moveEnemy);
    }
  }
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    start();
  } else {
    document.addEventListener('DOMContentLoaded', start);
  }
}