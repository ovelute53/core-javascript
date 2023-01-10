function insertBefore(node, text) {
  if (typeof node === "string") node = getNode(node);
  if (node.nodeType !== document.ELEMENT_NODE)
    throw new TypeError(
      "insertBefore 함수의 첫 번째 인자는 ELEMENT 노드여야 합니다"
    );
  node.insertAdjacentHTML("beforebegin", text);
}
function insertFirst(node, text) {
  if (typeof node === "string") node = getNode(node);
  if (node.nodeType !== document.ELEMENT_NODE)
    throw new TypeError(
      "insertFirst 함수의 첫 번째 인자는 ELEMENT 노드여야 합니다"
    );
  node.insertAdjacentHTML("afterbegin", text);
}
function insertLast(node, text) {
  if (typeof node === "string") node = getNode(node);
  if (node.nodeType !== document.ELEMENT_NODE)
    throw new TypeError(
      "insertLast 함수의 첫 번째 인자는 ELEMENT 노드여야 합니다"
    );
  node.insertAdjacentHTML("beforeend", text);
}
function insertAfter(node, text) {
  if (typeof node === "string") node = getNode(node);
  if (node.nodeType !== document.ELEMENT_NODE)
    throw new TypeError(
      "insertAfter 함수의 첫 번째 인자는 ELEMENT 노드여야 합니다"
    );
  node.insertAdjacentHTML("afterend", text);
}
