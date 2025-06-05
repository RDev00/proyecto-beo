export default function explode(probability, points) {
  const random = Math.random();
  const deathmsg = document.getElementById('deathmsg');
  if (random > probability / 100) {
    deathmsg.style.display = 'flex';
    deathmsg.classList.add('showMenu');
    localStorage.setItem('status', 'death');
    document.getElementById('points').innerText = `Puntaje: ${points}`;
    document.getElementById('probability').innerText = `Probabilidad: ${probability}%`
  }
}