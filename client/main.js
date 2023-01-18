import { insertLast, xhrData, xhrPromise } from "./lib/index.js";

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
xhrPromise
  .get("https://jsonplaceholder.typicode.com/users/1") // promise
  .then((res) => {
    insertLast(document.body, JSON.stringify(res));
  })
  .catch((err) => {
    console.log(err);
  });
