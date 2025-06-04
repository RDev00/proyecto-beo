export default function playerShoot(player, map, targets = []) {
  let probability = 100;
  const dmg = 5;
  function checkCollision(rect1, rect2) {
    return (
      rect1.x < rect2.x + rect2.width &&
      rect1.x + rect1.width > rect2.x &&
      rect1.y < rect2.y + rect2.height &&
      rect1.y + rect1.height > rect2.y
    );
  }

  function explotar(probability) {
    const random = Math.random();
    if (random < probability / 100) {
      return console.log('Sobreviviste');
    } else {
      return console.log('Explotaste');
    }
  }

  function createShoot() {
    explotar(probability);
    probability -= 1;
    const playerRect = player.getBoundingClientRect();
    let posX = playerRect.x + playerRect.width;
    const posY = playerRect.y + playerRect.height / 2;
    const shoot = document.createElement('span');
    shoot.classList.add('shoot');
    shoot.style.position = 'fixed';
    shoot.style.left = `${posX}px`;
    shoot.style.top = `${posY}px`;
    map.appendChild(shoot);
    function moveShoot() {
      posX += 5;
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
  document.addEventListener('mousedown', createShoot);
}