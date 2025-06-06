import createEnemy from "./createEnemy.js";
import rng from "../rng.js";

export default function enemyGeneration(count = 100) {
  function spawn(i) {
    if (i > count) return;
    createEnemy();
    const delay = rng(1000, 1500);
    setTimeout(() => spawn(i + 1), delay);
  }
  spawn(1);
}