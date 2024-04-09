// Function to calculate the distance from Scuber's headquarters in blocks
function distanceFromHqInBlocks(someValue) {
    return Math.abs(someValue - 42); // Assuming Scuber's headquarters is at block 42
  }
  
  // Function to calculate the distance from Scuber's headquarters in feet
  function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264; // 1 block = 264 feet
  }
  
  // Function to calculate the distance travelled in feet between start and destination blocks
  function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination - start) * 264; // Assuming 1 block = 264 feet
  }
  
  // Function to calculate the fare price based on the distance travelled
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
  
    if (distance <= 400) {
      return 0; // First 400 feet are free
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02; // 2 cents per foot after the first 400 feet
    } else if (distance > 2000 && distance < 2500) {
      return 25; // Flat fare of $25 for distance over 2000 feet and under 2500 feet
    } else {
      return 'cannot travel that far'; // Return error message for distances over 2500 feet
    }
  }
  