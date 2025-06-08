import verifySize from './verifySize.js';

export default function updateSize(){
	let compatibility = verifySize();
	const button = document.getElementById('start');
	const msg = document.getElementById('sizeMessage');
	if (compatibility === false) {
		button.classList.add('disabled');
		msg.style.display = 'block';
	}
	window.addEventListener('resize', e => {
		compatibility = verifySize();
		if (compatibility === false) {
			button.classList.add('disabled');
			msg.style.display = 'block';
		} else {
			button.classList.remove('disabled');
			msg.style.display = 'none';
		}
	});
}