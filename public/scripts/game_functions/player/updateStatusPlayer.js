import verifyStatus from "./verifyStatus.js";

export default async function updateStatusPlayer(){
  const points = localStorage.getItem('points') || 0;
  const probability = localStorage.getItem('probability') || 100;
  if(status === 'death'){
    const deathmsg = document.getElementById('deathmsg');
    deathmsg.style.display = 'flex';
    deathmsg.classList.add('showMenu');
    document.getElementById('points').innerText = `Puntaje: ${points}`;
    document.getElementById('probability').innerText = `Probabilidad: ${probability}%`;
  }
}