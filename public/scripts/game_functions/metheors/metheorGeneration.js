import createMetheor from "./createMetheor.js";
import rng from "../rng.js";

export default function metheorGeneration(count = 100) {
  const maxCount = count || 25
  function spawn(i) {
    if (i > maxCount) return;
    createMetheor();
    const delay = rng(2500, 3500);
    setTimeout(() => spawn(i + 1), delay);
  }
  spawn(1);
}