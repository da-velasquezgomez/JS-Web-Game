function createImage(source) {
  let imgElement = document.createElement("img");
  imgElement.setAttribute("src", source);
  document.body.appendChild(imgElement);
  return imgElement;
}
