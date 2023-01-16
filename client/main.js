/* global gsap */

import {
  copy,
  clearContents,
  getInputValue,
  getNode,
  getRandom,
  insertLast,
  isNumericString,
  showAlert,
  addClass,
  toggleClass,
  removeClass,
} from "./lib/index.js";
import { jujeobData } from "./data/data.js";
const submit = getNode("#submit");
const resultArea = getNode(".result");

function clickSubmitHandler(e) {
  e.preventDefault();

  let name = getInputValue("#nameField");
  let list = jujeobData(name);
  let pick = list[getRandom(list.length - 1)];

  if (!name) {
    console.log("이름을 입력해주세요");
    showAlert(".alert-error", "올바른 정보를 입력해주세요", 2000);
    // addClass(resultArea, "shake");
    // // css 파일에서 만들어준 값을 불러온다
    // setTimeout(() => {
    //   removeClass(resultArea, "shake");
    // }, 1000);

    //GSAP을 이용한 방법

    gsap.fromTo(
      resultArea,
      0.01,
      { x: -5 },
      { x: 5, clearProps: "x", repeat: 20 }
    );

    return;
  }

  if (isNumericString(name)) {
    console.log("제대로 된 이름을 입력해주세요");
    showAlert(".alert-error", "문자를 입력해주세요", 2000);
    return;
  }

  clearContents(resultArea);
  insertLast(resultArea, pick);
}

function clickCopyHandler() {
  let copyPaste = resultArea.textContent;
  copy(copyPaste).then(() => {
    showAlert(".alert-success", "클립보드에 복사되었습니다.", 2000);
  });
  // copyPaste가 실행이 잘 되도록 약속(promise)하고 then(그리고 나서) 클립보드에 복사되었다고 알려줄게!
}

submit.addEventListener("click", clickSubmitHandler);
resultArea.addEventListener("click", clickCopyHandler);
