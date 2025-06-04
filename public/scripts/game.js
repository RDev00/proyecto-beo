import redirection from './functions/redirection.js';

const back = document.getElementById('back');

back.onclick = () => { redirection('../') }

import particles from './game functions/particles/particles.js';
particles();

import playerMove from './game functions/player/playerMove.js';
const player = document.getElementById('player')
playerMove(player);

import playerShoot from './game functions/player/playerShoot.js';
playerShoot(player);