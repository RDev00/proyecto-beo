export default function playerShoot(player, map) {
  const dmg = 5;
  let x = 0;
  function createShoot() {
    const playerRect = player.getBoundingClientRect();
    const playerY = playerRect.y;
    const playerX = playerRect.x
    console.log(playerRect, playerRect.x, playerRect.y);
    const shoot = document.createElement('span');
    shoot.classList.add('shoot')
    x += 10 + playerX;
    shoot.style.transform = `translate(${x}px, ${playerY}px)`;
    map.appendChild(shoot);
  }

  document.addEventListener('mousedown', createShoot)
}