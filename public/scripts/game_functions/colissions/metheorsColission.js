export default function metheorsColission(){
  let metheors = document.getElementsByClassName('metheor');
  const player = document.getElementById('player');
  if (!player) return;
  const playerRect = player.getBoundingClientRect();
  const points = localStorage.getItem('points') || 0;
  const probability = localStorage.getItem('probability') || 100;

  Array.from(metheors).forEach((metheor) => {
    const metheorRect = metheor.getBoundingClientRect();

    const colissionCondition =
      metheorRect.x + 10 < playerRect.x + playerRect.width &&
      metheorRect.x + metheorRect.width > playerRect.x + 10 &&
      metheorRect.y + 10 < playerRect.y + playerRect.height &&
      metheorRect.y + metheorRect.height > playerRect.y + 10;

    if (colissionCondition) {
      localStorage.setItem('status', 'death');
      const deathmsg = document.getElementById('deathmsg');
      deathmsg.style.display = 'flex';
      deathmsg.classList.add('showMenu');
      document.getElementById('explosion').style.display = 'block';
      document.getElementById('explosion').classList.add('explode');
      document.getElementById('points').innerText = `Puntaje: ${points}`;
      document.getElementById('probability').innerText = `Probabilidad: ${probability}%`;
    }
  });
}