export default function playerMove(player) {
  let playerRect = player.getBoundingClientRect();
  let x = playerRect.x;
  let y = playerRect.y;
  const speed = 5;
  const keysPressed = new Set();

  const playerWidth = player.offsetWidth;
  const playerHeight = player.offsetHeight;

  function movePlayer() {
    const maxX = window.innerWidth - playerWidth;
    const maxY = window.innerHeight - playerHeight;

    if (keysPressed.has('W') || keysPressed.has('ARROWUP')) y -= speed;
    if (keysPressed.has('S') || keysPressed.has('ARROWDOWN')) y += speed;
    if (keysPressed.has('A') || keysPressed.has('ARROWLEFT')) x -= speed;
    if (keysPressed.has('D') || keysPressed.has('ARROWRIGHT')) x += speed;

    if (x < 0) x = 0;
    if (y < 0) y = 0;
    if (x > maxX) x = maxX;
    if (y > maxY) y = maxY;

    player.style.transform = `translate(${x}px, ${y}px)`;
    requestAnimationFrame(movePlayer);
  }

  document.addEventListener('keydown', (event) => {
    keysPressed.add(event.key.toUpperCase());
  });

  document.addEventListener('keyup', (event) => {
    keysPressed.delete(event.key.toUpperCase());
  });

  requestAnimationFrame(movePlayer);
}
