import verifyStatus from "./verifyStatus.js";
import enemyLimit from '../enemys/enemyLimit.js';
import metheorsLimit from '../metheors/metheorsLimit.js';
import enemyColission from '../colissions/enemyColission.js';
import metheorsColission from "../colissions/metheorsColission.js";
import getVolume from "../../functions/getVolume.js";

let audio;

export default function playerMove(player) {
  if (!audio) {
    audio = new Audio('../assets/audio/game_song.m4a');
    audio.loop = true;
  }
  if (audio.paused) {
    const volume = getVolume();
    audio.volume = (volume.general / 100) * (volume.sfx / 100);
    audio.play();
  }

  const playerRect = player.getBoundingClientRect();
  let x = playerRect.x;
  let y = playerRect.y;
  const speed = 7;
  const keysPressed = new Set();

  const playerWidth = player.offsetWidth;
  const playerHeight = player.offsetHeight;
  let animationId;

  if (!playerMove.listenersAdded) {
    document.addEventListener('keyup', (event) => {
      keysPressed.delete(event.key.toUpperCase());
    });
    document.addEventListener('keydown', (event) => {
      keysPressed.add(event.key.toUpperCase());
    });

    ['up', 'left', 'down', 'right'].forEach((dir, i) => {
      const input = ['W', 'A', 'S', 'D'][i];
      const el = document.getElementById(dir);
      if (el) {
        el.addEventListener('touchstart', () => movePlayerMobile(input));
      }
    });

    playerMove.listenersAdded = true;
  }

  function movePlayerPC() {
    const maxX = window.innerWidth - playerWidth;
    const maxY = window.innerHeight - playerHeight;

    if (keysPressed.has('W') || keysPressed.has('ARROWUP')) y -= speed;
    if (keysPressed.has('S') || keysPressed.has('ARROWDOWN')) y += speed;
    if (keysPressed.has('A') || keysPressed.has('ARROWLEFT')) x -= speed;
    if (keysPressed.has('D') || keysPressed.has('ARROWRIGHT')) x += speed;

    x = Math.min(Math.max(0, x), maxX);
    y = Math.min(Math.max(0, y), maxY);

    player.style.transform = `translate(${x}px, ${y}px)`;

    let status = verifyStatus();
    if (status === 'death') {
      cancelAnimationFrame(animationId);
      audio.pause();
      const explosion = document.getElementById('explosion');
      if (explosion) {
        explosion.style.display = 'block';
        explosion.classList.add('explode');
      }
      return;
    }

    enemyLimit();
    enemyColission();
    metheorsLimit();
    metheorsColission();

    animationId = requestAnimationFrame(movePlayerPC);
  }

  function movePlayerMobile(input) {
    const maxX = window.innerWidth - playerWidth;
    const maxY = window.innerHeight - playerHeight;

    switch (input) {
      case 'W': y -= speed; break;
      case 'A': x -= speed; break;
      case 'S': y += speed; break;
      case 'D': x += speed; break;
      default: break;
    }

    x = Math.min(Math.max(0, x), maxX);
    y = Math.min(Math.max(0, y), maxY);

    player.style.transform = `translate(${x}px, ${y}px)`;
  }

  animationId = requestAnimationFrame(movePlayerPC);
}