export default function openOptions(options) {
	options.classList.remove('hideMenu');
	options.classList.add('showMenu');
	options.style.display = 'flex';
  const audio = new Audio('../../assets/audio/click.mp3');
  audio.play();
}