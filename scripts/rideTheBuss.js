// Card settings
const cardValues = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
const cardSuit = ["Hearts", "Diamonds", "Clubs", "Spades"];

// dealers hand
const hand = [];

// result
let result = 0;
let win = false;
// Random number generator
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//random number selectors
let randomCard = getRandomInt(0, 11);
let randomSuit = getRandomInt(0, 3);

const button1 = document.getElementById("rtb-Button1");
const button2 = document.getElementById("rtb-Button2");

let buttonInput = 0;

function controller() {
  playerInput();
  firstDeal();
  secondDeal();
}
//captures players input
function playerInput() {
  buttonInput = 0;
  button1.addEventListener("click", function () {
    buttonInput = 1;
    console.log("button-" + buttonInput + " was selected");
  });
  button2.addEventListener("click", function () {
    buttonInput = 2;
    console.log("button-" + buttonInput + " was selected");
  });
  return buttonInput;
}

// generates a random card
function generateCard() {
  let numberChecker = cardValues[randomCard];
  let suitChecker = cardSuit[randomSuit];
  let checker = { number: numberChecker, suit: suitChecker };
  console.log(checker);
  for (let i = 0; i < hand.length; i++) {
    if (checker.number === hand[i].number && checker.suit === hand[i].suit) {
      // generateCard();
      console.log("we have a match");
    }
  }
  console.log("no matches");
  hand.push({ number: numberChecker, suit: suitChecker });
}

//result checker
function winCondition(result, buttonInput) {
  console.log("winCondition has been called");
  win = false;
  if (result === buttonInput) {
    win = true;
    buttonInput = 0;
    result = 0;
    console.log("dub");
    console.log(win);
    return win;
  }
}

//first hand
function firstDeal() {
  generateCard();
  result = 0;
  if (hand.suit === "Hearts" || hand.suit === "Diamonds") {
    result = 1;
    console.log(result);
  } else {
    result = 2;
    console.log(result);
  }
  winCondition(result, buttonInput);
}

//second hand
function secondDeal() {
  if (win === true) {
    console.log("working win condition");
  }
}

controller();
