import getVolume from './getVolume.js'

export default function closeOptions(options){
  options.classList.add('hideMenu');
  options.classList.remove('showMenu');
  options.addEventListener('animationend', event => {
    if(event.animationName === 'hideMenu'){
      options.style.display = 'none';
    }
  });
  const audio = new Audio('../../assets/audio/click.mp3');
  const volume = getVolume();
  audio.volume = (volume.general / 100) * (volume.sfx / 100);
  audio.play();
}