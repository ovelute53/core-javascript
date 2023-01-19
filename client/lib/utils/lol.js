const defaultOptions = {
  method: "GET",
  mode: "cors",
  body: null,
  cache: "no-cache",
  credential: "same-origin",
  redirect: "follow",
  referrerPolicy: "no-referrer",
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
  },
};

export const lol = async (options = {}) => {
  const { url, ...restOptions } = {
    ...defaultOptions,
    ...options,
    headers: { ...defaultOptions.headers, ...options.headers },
  };

  // let response = await fetch(url, restOptions);

  let response = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  // 성공 -> response.ok
  if (response.ok) {
    response.data = await response.json();
  }

  /*   response.then((res) => {
    console.log(res);
  }) */

  // console.log(response);
  return response;
};
lol.get = async (url, options) => {
  return lol({ url, ...options });
};

lol.post = (url, body, options) => {
  return lol({
    method: "POST",
    url,
    body: JSON.stringify(body),
    ...options,
  });
};

lol.put = (url, body, options) => {
  return lol({
    method: "PUT",
    url,
    body: JSON.stringify(body),
    ...options,
  });
};

lol.delete = (url, options) => {
  return lol({
    method: "DELETE",
    url,
    ...options,
  });
};
