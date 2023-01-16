export function isNumericString(data) {
  data = Number(data);
  return !isNaN(data);
}

export function isElement(node) {
  return node.nodeTupe === document.ELEMENT_NODE;
}
