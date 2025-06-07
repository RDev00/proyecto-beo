import redirection from "./functions/redirection.js";

const startButton = document.getElementById('start');

startButton.onclick = () => redirection('/game');

import closeOptions from './functions/closeOptions.js';
import openOptions from './functions/openOptions.js';
import getVolume from './functions/getVolume.js';
import getSound from './functions/getSound.js';
import quitSound from './functions/quitSound.js';

const exit = document.getElementById('exit');
const save = document.getElementById('save');
const options = document.getElementById('options');
const menu = document.getElementById('optionsMenu');
const generalInput = document.getElementById('general');
const ambientInput = document.getElementById('ambient');
const sfxInput = document.getElementById('sfx');
const generalQuit = document.getElementById('quitGeneral');
const ambientQuit = document.getElementById('quitAmbient');
const sfxQuit = document.getElementById('quitSfx');

const volume = getVolume();
generalInput.value = volume.general;
ambientInput.value = volume.ambient;
sfxInput.value = volume.sfx;

exit.onclick = () => closeOptions(menu);
save.onclick = () => {
	getSound(generalInput, "general");
	getSound(ambientInput, "ambient");
	getSound(sfxInput, "sfx");
	closeOptions(menu)
};
options.onclick = () => openOptions(menu);

generalQuit.onclick = () => {
	quitSound("general");
	const volume = getVolume();
	generalInput.value = volume.general;
  const audio = new Audio('../../assets/audio/click.mp3');
  audio.volume = (volume.general / 100) * (volume.sfx / 100);
  audio.play();
}