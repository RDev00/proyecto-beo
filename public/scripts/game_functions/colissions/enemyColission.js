export default function enemyColission() {
	let enemys = document.getElementsByClassName('enemy');
  const player = document.getElementById('player');
  if (!player) return;
  const playerRect = player.getBoundingClientRect();
  const points = localStorage.getItem('points') || 0;
  const probability = localStorage.getItem('probability') || 100;

  Array.from(enemys).forEach((enemy) => {
    const enemyRect = enemy.getBoundingClientRect();

    const colissionCondition =
      enemyRect.x + 5 < playerRect.x + playerRect.width &&
      enemyRect.x + enemyRect.width > playerRect.x + 5 &&
      enemyRect.y + 5 < playerRect.y + playerRect.height &&
      enemyRect.y + enemyRect.height > playerRect.y + 5;

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