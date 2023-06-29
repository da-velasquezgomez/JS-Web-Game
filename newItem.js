function createItem(source) {
  let obj = createImage(source);
  obj.addEventListener("click", () => {
    obj.remove();
    let invItem = createImage(source);
    inv.appendChild(invItem);
  });
  return obj;
}
