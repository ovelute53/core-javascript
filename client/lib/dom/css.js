function addClass(node, className) {
  if (typeof node === "string") node = getNode(node);

  if (typeof className !== "string") {
    TypeError("addClass 함수의 두 번째 인자는 문자 타입이어야 합니다.");
  }
  node.classList.add(className);
}

function removeClass(node, className) {
  if (typeof node === "string") node = getNode(node);

  if (!className) {
    node.className = "";
    return;
  }

  if (typeof className !== "string") {
    TypeError("removeClass 함수의 두 번째 인자는 문자 타입이어야 합니다.");
  }

  node.classList.remove(className);
}

function toggleClass(node, className) {
  if (typeof node === "string") node = getNode(node);

  if (typeof className !== "string") {
    TypeError("toggleClass 함수의 두 번째 인자는 문자 타입이어야 합니다.");
  }
  node.classList.toggle(className);
}

function getCss(node, prop) {
  if (typeof node === "string") {
    node = getNode(node);
  }

  if (!(prop in document.body.style)) {
    SyntaxError(
      "getCSS 함수의 두 번째 인자인 prop은 유효한 css 속성이 아니다."
    );
  }

  return getComputedStyle(node)[prop];
}

function setCss(node, prop, value) {
  if (typeof node === "string") {
    node = getNode(node);
  }

  if (!(prop in document.body.style)) {
    syntaxError(
      "setCSS 함수의 두 번째 인자인 prop은 유효한 css 속성이 아니다."
    );
  }

  if (!value) {
    syntaxError("setCSS 함구의 세 번째 인자는 필수값입니다.");
  }

  node.style[prop] = value;
}

function css(node, prop, value) {
  if (!value) {
    getCss(node, prop);
  } else {
    setCss(node, prop, value);
  }
}

// const css = (node, prop, value) =>
//   !value ? getCss(node, prop) : setCss(node, prop, value);
