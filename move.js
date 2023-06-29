function relocate(element) {
  element.style.position = "fixed";

  function toCoordinates(left, bottom) {
    element.style.left = `${left}px`;
    element.style.bottom = `${bottom}px`;
  }

  function withArrowKeys(left, bottom, callback) {
    let dir = null;
    let posX = left;
    let posY = bottom;

    element.style.left = `${posX}px`;
    element.style.bottom = `${posY}px`;

    function moveElement() {
      const directions = {
        west: () => (posX -= 1),
        north: () => (posY += 1),
        east: () => (posX += 1),
        south: () => (posY -= 1),
      };

      if (dir in directions) {
        directions[dir]();
        element.style.left = `${posX}px`;
        element.style.bottom = `${posY}px`;
      }
    }

    setInterval(moveElement, 1);

    document.addEventListener("keydown", function (e) {
      if (e.repeat) {
        return;
      }

      const arrowKeys = {
        ArrowLeft: "west",
        ArrowUp: "north",
        ArrowRight: "east",
        ArrowDown: "south",
      };

      if (e.key in arrowKeys) {
        dir = arrowKeys[e.key];
        callback(dir);
      }
    });

    document.addEventListener("keyup", function (e) {
      dir = null;
      callback(dir);
    });
  }

  return {
    to: toCoordinates,
    withArrowKeys: withArrowKeys,
  };
}
