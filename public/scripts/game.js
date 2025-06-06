localStorage.removeItem('status');
localStorage.removeItem('points');
localStorage.removeItem('probability');

import redirection from './functions/redirection.js';

const back = document.getElementById('back');
back.onclick = () => { redirection('../') }
const restart = document.getElementById('restart');
restart.onclick = () => { redirection('/game') }

import particles from './game_functions/particles/particles.js';
particles();

import playerMove from './game_functions/player/playerMove.js';
const player = document.getElementById('player');
playerMove(player);

import playerShoot from './game_functions/player/playerShoot.js';
const map = document.getElementById('game');

let enemys = document.getElementsByClassName('enemy');
let metheors = document.getElementsByClassName('metheor');

playerShoot(player, map, enemys, metheors);

import enemyGeneration from './game_functions/enemys/enemyGeneration.js';
enemyGeneration();

import metheorGeneration from './game_functions/metheors/metheorGeneration.js';
metheorGeneration();