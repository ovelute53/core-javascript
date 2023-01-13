/* ---------------------------------------------------------------------- */
/* DOM Styling                                                            */
/* ---------------------------------------------------------------------- */

const first = getNode(".first");

/* 클래스를 관리할 수 있게 해주는 DOM 프로퍼티 ------------------------------------ */

// - className – 클래스 전체를 문자열 형태로 반환해주는 프로퍼티로 클래스 전체를 관리할 때 유용
// - classList – 클래스 하나를 관리할 수 있게 해주는 메서드로 개별 클래스를 조작할 때 유용

// console.log(first.className);
// first.classList.add("hello");
// first.classList.remove("hello");
// first.classList.toggle("is-active");
// console.log(first.classList.contains('is-active'));

/* 스타일 변경 방법 --------------------------------------------------------- */

// - style.cssText - "style" 속성 전체에 대응하므로 스타일 전체에 대한 문자열 저장

first.style.backgroundColor = "red";
first.style.transform = "rotate(360deg)";

/* 계산된 스타일 읽기 ------------------------------------------------------- */
// let size = getComputedStyle(first).fontSize;
// console.log(size);

// 자바스크립트에서는 객체의 key, value 값을 변수로 받기 위해서는 dot(.) 사용 x
// [] 각괄호 표기법을 사용한다

// - getComputedStyle(element, [pseudoElement]) `읽기 전용`
