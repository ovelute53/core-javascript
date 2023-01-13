import { getNode } from "./getNode.js";
import { addClass, removeClass } from "./css.js";

export function showAlert(
  node,
  text = "Error! Error! Error가 발생하였습니다",
  timeout = 1500
) {
  if (typeof node === "string") node = getNode(node);
  node.textContent = text;
  addClass(node, "is-active");
  setTimeout(() => {
    removeClass(node, "is-active");
  }, timeout);
}

showAlert(".alert", "올바른 정보를 입력해주세요", 3000);
