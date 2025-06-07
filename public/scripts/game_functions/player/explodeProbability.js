import getVolume from '../../functions/getVolume.js';

export default function explode(probability, points) {
  const random = Math.random();
  const deathmsg = document.getElementById('deathmsg');
  const sfx = new Audio('../../../assets/audio/explosion.wav');
  if (random > probability / 100) {
    deathmsg.style.display = 'flex';
    deathmsg.classList.add('showMenu');
    document.getElementById('explosion').style.display = 'block';
    document.getElementById('explosion').classList.add('explode');
    localStorage.setItem('status', 'death');
    document.getElementById('points').innerText = `Puntaje: ${points}`;
    document.getElementById('probability').innerText = `Probabilidad: ${probability}%`
  }
}