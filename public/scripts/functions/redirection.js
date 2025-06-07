import getVolume from './getVolume.js';

export default function redirection(link){
  const sfx = new Audio('../../assets/audio/click.mp3');
  const volume = getVolume();
  sfx.volume = (volume.general / 100) * (volume.sfx / 100);
  sfx.play();

  setTimeout(() => { window.location.href = link }, 200)
};