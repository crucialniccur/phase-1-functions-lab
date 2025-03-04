const { use } = require("chai");

// Code your solution in this file!
function distanceFromHqInBlocks(userlocation) {
  //   return userlocation - 42;
  //   let dstnce = Math.abs(userlocation);
  if (userlocation <= 42) {
    return 42 - userlocation;
  } else {
    return userlocation - 42;
  }
}
