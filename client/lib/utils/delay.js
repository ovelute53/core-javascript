import { getNode } from "../dom/getNode.js";
import { isNumber, isObject } from "./typeOf.js";

const first = getNode(".first");
const second = getNode(".second");

// console.log(first);

// function delay(callback, timeout = 1000) {
//   setTimeout(callback, timeout);
// }

// delay(() => {
//   first.style.top = "-100px";
//   delay(() => {
//     first.style.transform = "rotate(360deg)";
//     delay(() => {
//       first.style.top = "0px";
//     });
//   });
// });

// delayP()
//   .then(() => {
//     first.style.top = "-100px";
//     return delayP();
//   })
//   .then(() => {
//     first.style.transform = "rotate(360deg)";
//     second.style.left = "100px";
//     return delayP();
//   })
//   .then(() => {
//     first.style.top = "0px";
//     second.style.left = "0px";
//   });

const defaultOptions = {
  shouldReject: false,
  timeout: 1000,
  data: "success!!",
  errorMessage: "ERROR!!!! ERROR!!!!",
};

export function delayP(options = {}) {
  //아래 실행된 dataP에서 바꿀 정보를 가져와 덮어쓴다
  // const { shouldReject, data, errorMessage, timeout } = options;

  let config = { ...defaultOptions };
  // let config2 = Object.assign({},defaultOptions);
  // 그냥 냅다 defaultOptions를 불러와 사용하게 되면 값이 바뀌어 버리니까 config에 얕은 복사를 해온다. 즉, config에 복사해 온 defaultOptions를 이용해도 기본값은 바뀌지 않는다.

  if (isNumber(options)) {
    config.timeout = options;
  }

  // 객체 합성 mixin
  if (isObject(options)) {
    config = { ...config, ...options }; // 뒤에 있는게 덮여쓰기?
  }

  const { shouldReject, data, errorMessage, timeout } = config;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      !shouldReject ? resolve(data) : reject(errorMessage);
      // if (!shouldReject) {
      //   resolve("성공!");
      // } else {
      //   reject("실패!");
      // }
    }, timeout);
  });
}

// delayP({
//   timeout: 1500,
//   data: "성공입니다!!",
// }).then((res) => {
//   console.log(res);
// });

// delayP()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// 위에 코드를 바로 리턴시켜버리기
// delayP()
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));
