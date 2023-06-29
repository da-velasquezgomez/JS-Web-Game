function createInventory() {
  let inv = document.createElement("div");
  inv.style.cssText =
    "width: 100%; height: 100px; display: flex; flexDirection: row; alignItems: center; justifyContent: space-evenly; border: 2px solid black; backgroundColor: brown;";
  document.body.appendChild(inv);
  return inv;
}
