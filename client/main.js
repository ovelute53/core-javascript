import {
  clearContents,
  getInputValue,
  getNode,
  getRandom,
  insertLast,
  isNumericString,
  showAlert,
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
    showAlert(".alert", "올바른 정보를 입력해주세요", 2000);
    return;
  }

  if (isNumericString(name)) {
    console.log("제대로 된 이름을 입력해주세요");
    showAlert(".alert", "문자를 입력해주세요", 3000);
    return;
  }

  clearContents(resultArea);
  insertLast(resultArea, pick);
}

submit.addEventListener("click", clickSubmitHandler);
