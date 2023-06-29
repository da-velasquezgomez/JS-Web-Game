const gameInventory = newInventory();
move(gameInventory).to(0, 0);

const avatar = newImage("assets/green-character/static.gif");

function onDirectionChange(direction) {
  const staticImg = "assets/green-character/static.gif";
  const directionImgs = {
    west: "assets/green-character/west.gif",
    north: "assets/green-character/north.gif",
    east: "assets/green-character/east.gif",
    south: "assets/green-character/south.gif",
  };

  if (direction === null) {
    avatar.src = staticImg;
  } else if (directionImgs.hasOwnProperty(direction)) {
    avatar.src = directionImgs[direction];
  }
}

move(avatar).withArrowKeys(100, 250, onDirectionChange);

const objectLocations = [
  ["assets/tree.png", 200, 450],
  ["assets/pillar.png", 350, 250],
  ["assets/pine-tree.png", 450, 350],
  ["assets/crate.png", 150, 350],
  ["assets/well.png", 500, 575],
  ["assets/sword.png", 500, 555],
  ["assets/shield.png", 165, 335],
  ["assets/staff.png", 600, 250],
];

objectLocations.forEach(([img, x, y]) => move(newImage(img)).to(x, y));
