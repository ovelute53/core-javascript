/* global gsap */

import {
  lol,
  attr,
  delayP,
  getNode as $,
  insertLast,
  changeColor,
  renderSpinner,
  renderUserCard,
  renderEmptyCard,
} from "./lib/index.js";

// xhrData.get(
//   "https://jsonplaceholder.typicode.com/users/1",
//   (res) => {
//     // console.log(res);
//     insertLast("body", JSON.stringify(res));
//   },
//   (err) => {
//     insertLast("body", err);
//     // console.log(err);
//   }
// );
// xhrPromise
//   .get("https://jsonplaceholder.typicode.com/users/1") // promise
//   .then((res) => {
//     insertLast(document.body, JSON.stringify(res));
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// async function render() {
//   await delayP(2000);
//   let response = await lol.get("https://jsonplaceholder.typicode.com/users/1");
//   console.log(response.data);
// }
// render();

// rendingUserList 함수 만들기
// ajax (tiger) get user List

// 유저 카드 생성
// 생성된 카드로 랜더링

//  1. userList.js로 갑니다.
//  2. renderUserCard 함수를 만들기
//  3. 만들어진 함수 안에 createUserCard를 던지고,
//  4. renderUserCard함수를 사용했을 때  랜더링이 잘 될 수 있도록.

const userCardContainer = $(".user-card-inner");

async function rendingUserList() {
  renderSpinner(userCardContainer);

  try {
    await delayP(2000);

    $(".loadingSpinner").remove();

    let response = await lol.get("http://localhost:3000/users");

    let userData = response.data;

    // console.log(userData);

    userData.forEach((data) => {
      // console.log(userData);
      renderUserCard(userCardContainer, data);
    });
    // lol.get("https://jsonplaceholder.typicode.com/users/1").then((res)=>{console.log(res)}).catch((err)=>{console.log(err)})
    // renderUserCard(userCardContainer, userData);
    // console.log(gsap.utils.toArray(".user-card"));

    changeColor(".user-card");

    gsap.to(gsap.utils.toArray(".user-card"), {
      x: 0,
      opacity: 1,
      duration: 1.5,
      stagger: 0.2,
    });
  } catch (err) {
    console.log(err);
    renderEmptyCard(userCardContainer);
  }
}

rendingUserList();

function deleteHandler(e) {
  // e.target(".delete");
  let deleteButton = e.target.closest("button");
  let article = e.target.closest("article");

  if (!deleteButton || !article) return;

  let id = attr(article, "data-index").slice(5);
  lol.delete(`http://localhost:3000/users/${id}`).then(() => {
    userCardContainer.innerHTML = "";
    rendingUserList();
  });
  // console.log(id);
  // console.log(deleteButton);
}

userCardContainer.addEventListener("click", deleteHandler);
