import verifyStatus from "./verifyStatus.js";
import enemyLimit from '../enemys/enemyLimit.js';
import enemyColission from '../colissions/enemyColission.js';
import metheorsColission from "../colissions/metheorsColission.js";
const audio = new Audio('../assets/audio/game_song.m4a');

export default function playerMove(player) {
  audio.play();
  let playerRect = player.getBoundingClientRect();
  let x = playerRect.x;
  let y = playerRect.y;
  const speed = 7;
  const keysPressed = new Set();

  const playerWidth = player.offsetWidth;
  const playerHeight = player.offsetHeight;
  let animationId;

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

    let status = verifyStatus();
    if(status === 'death') {
      cancelAnimationFrame(animationId);
      audio.pause();
      return;
    }

    animationId = requestAnimationFrame(movePlayer);
    
    enemyLimit();
    enemyColission();
    metheorsColission();
  }

  document.addEventListener('keydown', (event) => {
    keysPressed.add(event.key.toUpperCase());
  });

  document.addEventListener('keyup', (event) => {
    keysPressed.delete(event.key.toUpperCase());
  });

  animationId = requestAnimationFrame(movePlayer);
}