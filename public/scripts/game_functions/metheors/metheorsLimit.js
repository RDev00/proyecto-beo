export default function metheorsLimit() {
	let metheors = document.getElementsByClassName('metheor');
	const points = localStorage.getItem('points') || 0;
	const probability = localStorage.getItem('probability') || 100;
	Array.from(metheors).forEach((metheor) => {
		const metheorRect = metheor.getBoundingClientRect();
		if (metheorRect.x <= 0) {
			localStorage.setItem('status', 'death');
	    deathmsg.style.display = 'flex';
	    document.getElementById('explosion').style.display = 'block';
	    document.getElementById('explosion').classList.add('explode');
	    deathmsg.classList.add('showMenu');
	    document.getElementById('points').innerText = `Puntaje: ${points}`;
	    document.getElementById('probability').innerText = `Probabilidad: ${probability}%`;
		}
	})
}