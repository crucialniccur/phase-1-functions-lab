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
  // distance in blocks from hq
}

function distanceFromHqInFeet(userlocation) {
  return distanceFromHqInBlocks(userlocation) * 264;
  // blocks to feet
}

function distanceTravelledInFeet(start, destination) {
  let travelledBlocks = Math.abs(destination - start);
  return travelledBlocks * 264;
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
}
