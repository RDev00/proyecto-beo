export default function metheorLimit() {
	let metheors = document.getElementsByClassName('metheor');
	const points = localStorage.getItem('points') || 0;
	const probability = localStorage.getItem('probability') || 100;
	Array.from(metheors).forEach((metheor) => {
		const metheorRect = metheor.getBoundingClientRect();
		if (metheorRect.x <= -10) {
			localStorage.setItem('status', 'death');
	    deathmsg.style.display = 'flex';
	    deathmsg.classList.add('showMenu');
	    document.getElementById('points').innerText = `Puntaje: ${points}`;
	    document.getElementById('probability').innerText = `Probabilidad: ${probability}%`;
		}
	})
}