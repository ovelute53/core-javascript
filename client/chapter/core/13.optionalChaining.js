/* ---------------------------------------------------------------------- */
/* Optional Chaining                                                      */
/* ---------------------------------------------------------------------- */

const portableFan = {
  maker: "fromB",
  brand: "FD221",
  type: "neckband",
  photo: {
    static: "https://bit.ly/3OS50UD",
    animate: "https://bit.ly/3P8646q",
  },
  getFullName() {
    return `${this.brand}, ${this.maker}`;
  },
};

// 아래 코드는 문제가 있어 런타임 중 오류가 발생합니다.
console.log(portableFan?.photos?.animate);

// 오류를 발생시키지 않으려면 아래와 같이 작성해야 합니다.
// if ('photos' in portableFan) {
//   if ('animate' in portableFan.photos) {
//     console.log(portableFan.photos.animate);
//   }
// }

// 위 구문을 논리곱 연산자를 사용한 방식으로 변경해봅니다.

// 위 구문을 옵셔널 체이닝을 사용한 구문으로 변경해봅니다.

// 메서드 사용 시, 옵셔널 체이닝을 사용해봅니다.

// 객체의 프로퍼티 접근 시, 옵셔널 체이닝을 사용해봅니다.

// 타이머
setTimeout(() => {
  const button = `<button type = "button"> click me! </button>`;

  document.body.insertAdjacentHTML("beforeend", button);
}, 3000); //ms

document.querySelector("button")?.addEventListener("click", function () {
  console.log("hit");
});

// 몇 초 간격으로 계속 실행되는 반복타이머
// setInterval(() => {
//   console.log("난 인터벌이야");
// }, 1000);
