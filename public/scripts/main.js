//Apartado de redirecciones
import redirection from "./functions/redirection.js";

const startButton = document.getElementById('start');

startButton.onclick = () => redirection('/game');

//Animaciones de options
import closeOptions from './functions/closeOptions.js';
import openOptions from './functions/openOptions.js';

const exit = document.getElementById('exit');
const save = document.getElementById('save');
const options = document.getElementById('options');
const menu = document.getElementById('optionsMenu');

exit.onclick = () => closeOptions(menu);
save.onclick = () => closeOptions(menu);
options.onclick = () => openOptions(menu);