/* readyState
0: uninitalized 초기화
1: loading 로딩중
2: loaded 로딩이 완료됨
3: interactive 인터랙티브
4: complete 완료
*/

//xhrData 함수 만들기 method, url

export function xhrData({
  url = "",
  method = "GET",
  body = "null",
  onSuccess = null,
  onFail = null,
  headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
}) {
  const xhr = new XMLHttpRequest();
  // 비동기 통신이 오픈되지 않은 상태에서 콘솔을 찍으면 0이 나온다

  // 비동기 통신 오픈
  xhr.open(method, url);

  // 객체를 key와 value를 가진 배열로 만들어준다
  Object.entries(headers).forEach(([key, value]) => {
    xhr.setRequestHeader(key, value);
    // console.log(key, value);
  });

  xhr.addEventListener("readystatechange", () => {
    const { status, readyState, response } = xhr; //객체 구조 분해 할당
    if (status >= 200 && status < 400) {
      if (readyState === 4) {
        console.log("통신 성공");

        onSuccess(JSON.parse(response));
        console.log();
      }
    } else {
      // console.error("통신 실패");
      onFail("통신 실패");
    }
  });

  // 서버에 요청
  xhr.send(JSON.stringify(body));
}

// console.log(xhr);

// xhrData({
//   url: "https://jsonplaceholder.typicode.com/users",
//   onSuccess: (result) => {
//     console.log(result);
//   },
//   onFail: (err) => {
//     console.error(err);
//   },
// });

xhrData.get = (url, onSuccess, onFail) => {
  xhrData({
    url,
    onSuccess,
    onFail,
  });
};

xhrData.post = (url, body, onSuccess, onFail) => {
  xhrData({
    method: "POST",
    body,
    url,
    onSuccess,
    onFail,
  });
};
xhrData.put = (url, body, onSuccess, onFail) => {
  xhrData({
    method: "PUT",
    body,
    url,
    onSuccess,
    onFail,
  });
};
xhrData.delete = (url, body, onSuccess, onFail) => {
  xhrData({
    method: "DELETE",
    url,
    onSuccess,
    onFail,
  });
};

xhrData.get(
  "https://jsonplaceholder.typicode.com/users",
  (result) => {
    console.log(result);
  },
  (err) => {
    console.log(err);
  }
);

xhrData.post(
  "https://jsonplaceholder.typicode.com/users",
  {
    name: "MESSI",
    username: "GOAT",
    email: "goat@messi.psg",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
  (result) => {
    console.log(result);
  },
  (err) => {
    console.log(err);
  }
);
// xhrData("POST", "https://jsonplaceholder.typicode.com/users", {
//   name: "birdone",
//   username: "saehan",
//   email: "ovelute53@naver.,com",
//   address: {
//     street: "Kulas Light",
//     suite: "Apt. 556",
//     city: "Gwenborough",
//     zipcode: "92998-3874",
//   },
//   geo: {
//     lat: "-37.3159",
//     lng: "81.1496",
//   },
// });
