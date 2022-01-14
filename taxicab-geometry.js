// Create a function to get the direction based on a past direction and move
const getDirection = function(direction, move) {
  let newDirection = "";
  if (move === "left") {
    if (direction === "north") {
      newDirection = "west";
    }
    if (direction === "east") {
      newDirection = "north";
    }
    if (direction === "south") {
      newDirection = "east";
    }
    if (direction === "west") {
      newDirection = "south";
    }
  }
  if (move === "right") {
    if (direction === "north") {
      newDirection = "east";
    }
    if (direction === "east") {
      newDirection = "south";
    }
    if (direction === "south") {
      newDirection = "west";
    }
    if (direction === "west") {
      newDirection = "north";
    }
  }
  return newDirection;
};

const blocksAway = function(directions) {
  // Create position object
  let position = {
    east: 0,
    north: 0,
  };
  // Set initial direction facing to north - change to east if first move is right
  let directionFacing = "north";
  if (directions[0] === "right") {
    directionFacing = "east";
  }
  // Add first move in direction facing to position object
  position[directionFacing] += directions[1];
  // Start loop from second move
  for (let i = 2; i < directions.length; i += 2) {
    let directionTurning = getDirection(directionFacing, directions[i]);
    if (directionTurning === "south") {
      position.north -= directions[i + 1];
    }
    if (directionTurning === "west") {
      position.east -= directions[i + 1];
    }
    if (Object.keys(position).includes(directionTurning)) {
      position[directionTurning] += directions[i + 1];
    }
    directionFacing = directionTurning;
  }
  return position;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
// console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
// console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));