/* ---------------------------------------------------------------------- */
/* Array's Methods                                                        */
/* ---------------------------------------------------------------------- */

// Array.isArray
const arr = [10, 100, 1000, 10000];

function isArray(data) {
  return Object.prototype.toString.call(data).slice(8, -1).toString;
}
/* 요소 순환 -------------------------------------------------------------- */

// forEach

/* 원형 파괴 -------------------------------------------------------------- */

// push
// pop
// unshift
// shift
// reverse
// splice
// sort

/* 새로운 배열 반환 --------------------------------------------------------- */

// concat
// slice
// map

let nickName = "saehan";
`안녕 나는 ${nickName}이야~!`;

let todo = ["식사", "당근하기", "복습하기"];

let template = todo.map((todoList) => {
  return `<li>${todoList}</li>`;
});

template.forEach((item) => {
  document.body.insertAdjacentHTML("beforeend", item);
});

console.log(template);

let newArray = arr.map((item) => item * 2);
console.log(newArray);

/* 요소 포함 여부 확인 ------------------------------------------------------ */

// indexOf

console.log(arr.indexOf(999));

// lastIndexOf
// includes
console.log(arr.includes(10));
/* 요소 찾기 -------------------------------------------------------------- */

// find
const users = [
  { id: 1, name: "주희" },
  { id: 2, name: "보화" },
  { id: 3, name: "하연" },
];

const find = users.find((item, index) => {
  return item.user < 5;
});

// console.log(find);

// findIndex
const findIndex = users.findIndex((item) => {
  return item.id === 3;
});

// console.log(findIndex);
/* 요소 걸러내기 ----------------------------------------------------------- */

// filter
let result = arr.filter((number) => {
  return number < 100;
});

// console.log(result);
/* 요소별 리듀서(reducer) 실행 ---------------------------------------------- */

// reduce
const friends = [
  {
    name: "윤보라",
    age: 28,
    job: "작꼬져",
  },
  {
    name: "이로운",
    age: 23,
    job: "배고픈 개발자",
  },
  {
    name: "오승택",
    age: 21,
    job: "물음표살인마",
  },
];
// reduceRight

/* string ←→ array 변환 ------------------------------------------------- */

// split
// join
