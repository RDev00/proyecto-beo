import redirection from "./functions/redirection.js";
const startButton = document.getElementById('start');

startButton.onclick = () => redirection('/game.html');

import openOptions from "./functions/openOptions.js";
import closeOptions from "./functions/closeOptions.js";

const exitButton = document.getElementById('exit');
const saveButton = document.getElementById('save');
const optionsButton = document.getElementById('options');
const menuOptions = document.getElementById('optionsMenu');

exitButton.onclick = () => closeOptions(menuOptions);
saveButton.onclick = () => closeOptions(menuOptions);

optionsButton.onclick = () => openOptions(menuOptions);