import rng from '../rng.js';

export default function createEnemy(){
  let posX = window.innerWidth;
  let typeEnemy = rng(0, 1);
  const map = document.getElementById('game');
  let enemyBox = document.createElement('span');
  enemyBox.classList.add('enemy');
  if(typeEnemy === 1){
    enemyBox.classList.add('enemy01');
  } else {
    enemyBox.classList.add('enemy02');
  }
  const maxheight = window.innerHeight - 100;
  let position = rng(100, maxheight);
  enemyBox.style.transform = `translate(${window.innerWidth}px, ${position}px)`;
  map.appendChild(enemyBox);

  function moveEnemy(){
    posX -= 10;
    enemyBox.style.transform = `translate(${posX}px, ${position}px)`;
  }

  for (let i = 0; i <= 10; i++) {
    requestAnimationFrame(moveEnemy);
  }
}