/* ---------------------------------------------------------------------- */
/* Logical Operators                                                      */
/* ---------------------------------------------------------------------- */


let age = 29;

if (age >= 14 && age =< 90){
  
}






let a = 10;
let b = "";
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB = a&&b;

// 논리합(또는) 연산자
let AorB = a||b;

// 부정 연산자
let reverseValue = !value;

// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && ' ' && [] && {thisIsFalsy:false};

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false;
