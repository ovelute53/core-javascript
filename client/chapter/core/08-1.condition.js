/* ---------------------------------------------------------------------- */
/* Condition                                                              */
/* ---------------------------------------------------------------------- */

// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

// 영화 봤니?
let didWatchMovie = prompt("아바타2 봤어??");

// 영화 볼거니?
let goingToWatchMovie = prompt("안봤으면 같이 보러갈까??");

// if 문(statement)
if (didWatchMovie == "yes") {
  console.log("응 나 그 영화 봤어~~!!");
} else if (didWatchMovie == "no") {
  console.log(goingToWatchMovie);
} else {
  console.log("웅!! 나 그 영화 안 봤는데 같이 보자 자기얌??");
}
// else 절(caluse)

// else if 복수 조건 처리

// 조건부 연산자

// 멀티 조건부 연산자 식
