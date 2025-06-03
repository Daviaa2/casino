// Casino game script for a simple slot machine

//rows
const slots = ["slotOne", "slotTwo", "slotThree"];
// Get the button element from the HTML

const spinButton = document.getElementById("spinButton");

//select the .slot element from the html
const slot = document.querySelectorAll(".slot");

// Symbols for the slot machine
// const slotValues = [ "cherry", "lemon", "orange", "plum", "bell", "bar", "seven" ];

//used gpt yo make the emojis
const slotValues = ["🍒", "🍋", "🍊", "🍇", "🔔", "🪙", "7️⃣"];

//results
let results = [];

// Function to get a random slot value
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to get a random slot value
let randomInt = getRandomInt(0, 6);

// Display the random slot values for each slot
function spinSlots() {
  results = []; // need this in the fuction or it wont reset
  for (let i = 0; i < slots.length; i++) {
    let randomInt = getRandomInt(0, slotValues.length - 1);
    results.push(slotValues[randomInt]);
    // console.log(`${slots[i]}: ${results[i]}`);
    document.getElementById(slots[i]).innerText = results[i]; // Display the result in the HTML element
  }

  if (results[0] === results[1] && results[1] === results[2]) {
    document.getElementById("result").innerText = "Jackpot! All slots match.";
  } else {
    document.getElementById("result").innerText =
      "Try again! Not all slots match.";
  }
}

// Add an event listener to the button to call the spinSlots function when clicked
spinButton.addEventListener("click", () => {
  spinSlots(); // Call the function to spin the slots
});
