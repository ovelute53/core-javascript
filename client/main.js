// eslint getNode 해결

// 1. input value 값 가져오기
// 2. 이벤트 핸들러 연결하기
// 3. 이벤트 기본동작 차단하기
// 4. 두 수의 합 더해주기
// 5. 화면에 출력하기
// -> 모듈을 이용한 getNode

import {
  getNode,
  css,
  addClass,
  removeClass,
  toggleClass,
} from "./lib/index.js";

const firstInput = getNode("#firstNumber");
const secondInput = getNode("#secondNumber");
const doneInput = getNode("#done");

/* value 값을 뽑아내는 유틸함수 */
function getInputValue(node) {
  if (typeof node === "string") node = getNode(node);
  if (node.tagName !== "INPUT")
    refError("getInputValue 함수는 INPUT ELEMENT만 허용한다.");

  return node.value;
}

/* 결과값의 하이픈을 제거하는 유틸함수 */
function clearContent(node) {
  if (typeof node === "string") node = getNode(node);
  node.textContent = "";
}

const sum = (valueA, valueB) => valueA + valueB;

function handler(e) {
  e.preventDefault();
  // a태그의 기본 동작을 막아버린다

  // let firstValue = firstInput.value; -> value 값 가져오기

  let firstValue = +getInputValue(firstInput);
  let secondValue = +getInputValue(secondInput);
  // + 로 숫자형으로 형변환해준다

  // console.log(firstValue, secondValue);

  let totalResult = sum(firstValue, secondValue);
  // console.log(totalResult);

  // getNode(".result").textContent = ""; -> 유틸함수를 만들기 위해 주석
  clearContent(".result");

  insertLast(".result", totalResult);
}

/* up down 키를 마우스 포인터로 눌렀을 때 result값이 자동으로 적용되어 바뀌게끔 만들어준다 */
function inputHandler(e) {
  let firstValue = +getInputValue(firstInput);
  let secondValue = +getInputValue(secondInput);
  let totalResult = sum(firstValue, secondValue);
  clearContent(".result");

  insertLast(".result", totalResult);
}

doneInput.addEventListener("click", handler);

firstInput.addEventListener("change", inputHandler);
secondInput.addEventListener("change", inputHandler);
// change 이벤트를 이용하여 이벤트함수를 만들어준다
