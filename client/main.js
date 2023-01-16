import {
  diceAnimation,
  disableElement,
  enableElement,
  getNode,
  getNodes,
} from "./lib/index.js";

// 배열 구조분해할당
const [rollingDiceButton, recordButton, resetButton] = getNodes(
  ".buttonGroup > button"
);
// const rollingDiceButton = getNode(".buttonGroup >button:nth-child(1)");
// const recordButton = getNode(".buttonGroup >button:nth-child(2)");
// const resetButton = getNode(".buttonGroup >button:nth-child(3)");

// IIFE
const handlerRollingDice = (() => {
  let isRolling = false;
  let stopAniamation;

  return () => {
    if (!isRolling) {
      stopAniamation = setInterval(diceAnimation, 200);
      disableElement(recordButton);
      disableElement(resetButton);
    } else {
      clearInterval(stopAniamation);
      enableElement(recordButton);
      enableElement(resetButton);
    }

    isRolling = !isRolling;
  };
})();

rollingDiceButton.addEventListener("click", handlerRollingDice);
