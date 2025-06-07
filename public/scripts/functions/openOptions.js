import getVolume from './getVolume.js'

export default function openOptions(options) {
	options.classList.remove('hideMenu');
	options.classList.add('showMenu');
	options.style.display = 'flex';
  const audio = new Audio('../../assets/audio/click.mp3');
  const volume = getVolume();
  audio.volume = (volume.general / 100) * (volume.sfx / 100);
  audio.play();
}