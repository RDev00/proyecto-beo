import createEnemy from "./createEnemy.js";
import rng from "../rng.js";

export default function enemyGeneration(count = 50) {
  function spawn(i) {
    if (i > count) return;
    createEnemy();
    const delay = rng(500, 1500);
    setTimeout(() => spawn(i + 1), delay);
  }
  spawn(1);
}