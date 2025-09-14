const { startTransition } = require("react");

// Code your solution in this file!
function distanceFromHqInBlocks(block) {
  const hq = 42;
  let distanceInBlocks = Math.abs(block - hq);
  return distanceInBlocks;
}

function distanceFromHqInFeet(block) {
    const hq = 42;
    let distanceInFeet = Math.abs(block - hq) * 264;
    return distanceInFeet;
}
function distanceTravelledInFeet(start,destination) {
    let distanceTravelled = Math.abs(start - destination) * 264;
    return distanceTravelled;
}
 function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    let distanceTravelled = Math.abs(start - destination) * 264;
    if(distanceTravelled <= 400){
        return 0;
    }
    else if(distanceTravelled <= 2000){
        return (distanceTravelled - 400) * 0.02;
    }
    else if(distanceTravelled <= 2500){
        return 25;
    }
    else{
        return "cannot travel that far";
    }
  }