export default function redirection(link){
  const sfx = new Audio('../../assets/audio/click.mp3');
  sfx.play();

  setTimeout(() => { window.location.href = link }, 200)
};