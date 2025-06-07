export default function closeOptions(options){
  options.classList.add('hideMenu');
  options.classList.remove('showMenu');
  options.addEventListener('animationend', event => {
    if(event.animationName === 'hideMenu'){
      options.style.display = 'none';
    }
  });
  const audio = new Audio('../../assets/audio/click.mp3');
  audio.play();
}