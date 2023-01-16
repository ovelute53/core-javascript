import { diceAnimation, getNode } from "./lib/index.js";

const rollingDiceButton = getNode(".buttonGroup >button:nth-child(1)");

// IIFE
const handlerRollingDice = (() => {
  let isRolling = false;
  let stopAniamation;

  return () => {
    if (!isRolling) {
      stopAniamation = setInterval(diceAnimation, 200);
    } else {
      clearInterval(stopAniamation);
    }

    isRolling = !isRolling;
  };
})();

rollingDiceButton.addEventListener("click", handlerRollingDice);
