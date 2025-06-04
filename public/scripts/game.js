import redirection from './functions/redirection.js';

const back = document.getElementById('back');

back.onclick = () => { redirection('../') }

import particles from './game_functions/particles/particles.js';
particles()

import playerMove from './game_functions/player/playerMove.js';
const player = document.getElementById('player')
playerMove(player);

import playerShoot from './game_functions/player/playerShoot.js';
const map = document.getElementById('game');
let objects = []
playerShoot(player, map, objects);