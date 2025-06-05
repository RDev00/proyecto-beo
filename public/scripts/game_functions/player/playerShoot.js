import explode from "./explodeProbability.js";
import verifyStatus from "./verifyStatus.js";

export default function playerShoot(player, map, targets) {
  let probability = 100;
  const dmg = 5;
  let speedShoot = 20;
  let points = 0;
  function checkCollision(rect1, rect2) {
    return (
      rect1.x < rect2.x + rect2.width &&
      rect1.x + rect1.width > rect2.x &&
      rect1.y < rect2.y + rect2.height &&
      rect1.y + rect1.height > rect2.y
    );
  }

  function createShoot() {
    let status = verifyStatus();
    if(status === 'death') {
      return;
    }

    probability -= 1;
    points += 1;
    localStorage.setItem('points', points);
    localStorage.setItem('probability', probability);
    explode(probability, points);
    const playerRect = player.getBoundingClientRect();
    let posX = playerRect.x + playerRect.width - 25 ;
    const posY = playerRect.y + playerRect.height - 24.8;
    const shoot = document.createElement('span');
    shoot.classList.add('shoot');
    shoot.style.position = 'fixed';
    shoot.style.left = `${posX}px`;
    shoot.style.top = `${posY}px`;
    map.appendChild(shoot);
    function moveShoot() {
      posX += speedShoot;
      shoot.style.left = `${posX}px`;
      const shootRect = shoot.getBoundingClientRect();
      for (const target of targets) {
        const targetRect = target.getBoundingClientRect();
        if (checkCollision(shootRect, targetRect)) {
          target.remove();
          shoot.remove();
          return;
        }
      }
      if (posX > window.innerWidth) {
        shoot.remove();
        return;
      }
      requestAnimationFrame(moveShoot);
    }
    requestAnimationFrame(moveShoot);
  }

  function startShoot(key) {
    if (key === '0'){
      createShoot()
    }
  }

  document.addEventListener('mousedown', createShoot);
  document.addEventListener('keydown', e => {
    startShoot(e.key.toUpperCase());
  });
}