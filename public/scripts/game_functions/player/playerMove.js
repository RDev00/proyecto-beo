import verifyStatus from "./verifyStatus.js";
import enemyLimit from '../enemys/enemyLimit.js';
import metheorsLimit from '../metheors/metheorsLimit.js';
import enemyColission from '../colissions/enemyColission.js';
import metheorsColission from "../colissions/metheorsColission.js";
import getVolume from "../../functions/getVolume.js"

const audio = new Audio('../assets/audio/game_song.m4a');

let isDead = false;
let animationId;
let mobileButtonsAdded = false;
const mobileKeysPressed = new Set();

export default function playerMove(player) {
  if (isDead) return;

  audio.loop = true;
  if (audio.paused) {
    const volume = getVolume();
    audio.volume = (volume.general / 100) * (volume.sfx / 100);
    audio.play();
  }

  let playerRect = player.getBoundingClientRect();
  let x = playerRect.x;
  let y = playerRect.y;
  const speed = 7;
  const keysPressed = new Set();

  const playerWidth = player.offsetWidth;
  const playerHeight = player.offsetHeight;

  function movePlayerPC() {
    if (isDead) return;

    const maxX = window.innerWidth - playerWidth;
    const maxY = window.innerHeight - playerHeight;
    
    if (keysPressed.has('W') || keysPressed.has('ARROWUP')) y -= speed;
    if (keysPressed.has('S') || keysPressed.has('ARROWDOWN')) y += speed;
    if (keysPressed.has('A') || keysPressed.has('ARROWLEFT')) x -= speed;
    if (keysPressed.has('D') || keysPressed.has('ARROWRIGHT')) x += speed;

    if (mobileKeysPressed.has('W')) y -= speed;
    if (mobileKeysPressed.has('S')) y += speed;
    if (mobileKeysPressed.has('A')) x -= speed;
    if (mobileKeysPressed.has('D')) x += speed;

    if (x < 0) x = 0;
    if (y < 0) y = 0;
    if (x > maxX) x = maxX;
    if (y > maxY) y = maxY;

    player.style.transform = `translate(${x}px, ${y}px)`;

    let status = verifyStatus();
    if(status === 'death') {
      isDead = true;
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

  // Listeners para teclado (PC)
  document.addEventListener('keyup', (event) => {
    keysPressed.delete(event.key.toUpperCase());
  });
  document.addEventListener('keydown', (event) => {
    keysPressed.add(event.key.toUpperCase());
  });

  if (!mobileButtonsAdded) {
    const buttons = [
      { id: 'up', key: 'W' },
      { id: 'left', key: 'A' },
      { id: 'down', key: 'S' },
      { id: 'right', key: 'D' },
    ];
    buttons.forEach(({ id, key }) => {
      const el = document.getElementById(id);
      if (el) {
        el.addEventListener('touchstart', (e) => {
          e.preventDefault();
          mobileKeysPressed.add(key);
        });
        el.addEventListener('touchend', (e) => {
          e.preventDefault();
          mobileKeysPressed.delete(key);
        });
        el.addEventListener('touchcancel', (e) => {
          e.preventDefault();
          mobileKeysPressed.delete(key);
        });
      }
    });
    mobileButtonsAdded = true;
  }

  animationId = requestAnimationFrame(movePlayerPC);
}