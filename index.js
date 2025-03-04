const { use } = require("chai");

// Code your solution in this file!
function distanceFromHqInBlocks(userlocation) {
  if (userlocation <= 42) {
    return 42 - userlocation;
  } else {
    return userlocation - 42;
    //  userBlocks;
  }
}

function distanceFromHqInFeet() {
  //   return userBlocks * 264;
}
