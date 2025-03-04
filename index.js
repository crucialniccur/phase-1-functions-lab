const { use } = require("chai");

// Code your solution in this file!
function distanceFromHqInBlocks(userlocation) {
  let userBlocks;
  if (userlocation <= 42) {
    userBlocks = 42 - userlocation;
  } else {
    userBlocks = userlocation - 42;
  }
  return userBlocks;
}

function distanceFromHqInFeet(userlocation) {
  return distanceFromHqInBlocks(userlocation) * 264;
}
