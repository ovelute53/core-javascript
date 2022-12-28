/* ---------------------------------------------------------------------- */
/* Type Conversion                                                        */
/* ---------------------------------------------------------------------- */

/* 데이터 → 문자 ----------------------------------------------------------- */

// number
const YEAR = 2023;

console.log(String(YEAR));

// undefined, null

console.log(String(undefined));

let days = null;
console.log(String(days));

// boolean

let isSaehan = true;
console.log(String(isSaehan));

/* 데이터 → 숫자 ----------------------------------------------------------- */

// undeinfed -> NaN

console.log(Number(undefined));

// null

let money = null;
console.log(Number(money));

// boolean

let cutie = true;
console.log(cutie / 1);

// string

let num = "           123       ";
console.log(num * 1);

// numeric string

let width = "32.23120px";

console.log(parseFloat(width, 10));
// 정수 - parseInt, 소수점이 필요한 경우 - parseFloat

/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들

console.log(Boolean(123));
console.log(!!" ");
