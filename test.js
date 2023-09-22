// Asking User for input
const userText = prompt("enter a list of comma-separated froyo flavors");

// removing , from user input and converting it to array
const userTextArray = userText.split(",");

// creating a object
const flavorCounter = {};


for (let i = 0; i < userTextArray.length; i++) {
// removing empty spaces from array  
  let flavor = userTextArray[i].trim();

  // counting how many flavors are in the array
  if (!flavorCounter[flavor]) {
    flavorCounter[flavor] = 0;
  }
  flavorCounter[flavor]++;
}

// creating a table with flavors and their number
console.table(flavorCounter);
