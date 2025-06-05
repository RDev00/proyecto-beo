export default function enemyLimit() {
	let enemys = document.getElementsByClassName('enemy');
	const points = localStorage.getItem('points') || 0;
	const probability = localStorage.getItem('probability') || 100;
	Array.from(enemys).forEach((enemy) => {
		const enemyRect = enemy.getBoundingClientRect();
		if (enemyRect.x <= -10) {
			localStorage.setItem('status', 'death');
	    deathmsg.style.display = 'flex';
	    deathmsg.classList.add('showMenu');
	    document.getElementById('points').innerText = `Puntaje: ${points}`;
	    document.getElementById('probability').innerText = `Probabilidad: ${probability}%`;
		}
	})
}