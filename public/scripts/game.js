localStorage.removeItem('status');
localStorage.removeItem('points');
localStorage.removeItem('probability');

import metheorGeneration from './game_functions/metheors/metheorGeneration.js';
import redirection from './functions/redirection.js';
import particles from './game_functions/particles/particles.js';
import playerMove from './game_functions/player/playerMove.js';
import playerShoot from './game_functions/player/playerShoot.js';
import enemyGeneration from './game_functions/enemys/enemyGeneration.js';
import verifyStatus from './game_functions/player/verifyStatus.js';
import getVolume from './functions/getVolume.js';

const back = document.getElementById('back');
const restart = document.getElementById('restart');
const player = document.getElementById('player');
const map = document.getElementById('game');
const blackscreen = document.getElementById('blackscreen');
const sfx = new Audio('../../assets/audio/click.mp3');
const start = document.getElementById('start');
let enemys = document.getElementsByClassName('enemy');
let metheors = document.getElementsByClassName('metheor');
back.onclick = () => { redirection('../') };
restart.onclick = () => { redirection('/game') };

function startGame(){
	particles();
	playerMove(player);
	playerShoot(player, map, enemys, metheors);
	enemyGeneration();
	metheorGeneration();
}

function removeBlackScreen(){
	sfx.play();
  const volume = getVolume();
  sfx.volume = (volume.general * 0.01) * (volume.sfx * 0.01);
	blackscreen.classList.add('hidden');
	blackscreen.addEventListener('animationend', event => {
		if(event.animationName === 'hideScreen'){
			blackscreen.style.display = 'none';
			startGame();
		}
	})
}

start.onclick = () => { removeBlackScreen() };
