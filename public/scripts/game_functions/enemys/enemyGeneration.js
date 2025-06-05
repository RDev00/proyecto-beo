import createEnemy from "./createEnemy.js";
import rng from "../rng.js";

export default function enemyGeneration(){
  let interval = 0;
  for (let i = 1; i <= 5; i++) {
    interval = rng(100, 500);
    setInterval(createEnemy(), interval);
  };
}