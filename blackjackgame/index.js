let messageHumanEl = document.getElementById("messagehuman-el");
let messagePcEl = document.getElementById("messagepc-el");
let sumHumanEl = document.getElementById("sumhuman-el");
let pcHumanEl = document.getElementById("sumpc-el");
let humanCardContainer = document.querySelector(".humancard");
let pcCardContainer = document.querySelector(".pccard");
let starButton = document.getElementById("startButton");
let standButton = document.getElementById("stand");
let hitButton = document.getElementById("hit");
let newGameButton = document.getElementById("newgame");

let humanArray = inicializateArray();
let pcArray = inicializateArray();

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function displayButtons(startoption, standoption, hitoption, newgameoption) {
  starButton.style.display = startoption;
  standButton.style.display = standoption;
  hitButton.style.display = hitoption;
  newGameButton.style.display = newgameoption;
}
function inicializateArray() {
  let firstCard = getRndInteger(2, 11);
  let secondCard = getRndInteger(2, 11);
  let array = [firstCard, secondCard];
  return array;
}

function sumArray(array) {
  let result = 0;
  array.map((index) => {
    result += index;
  });
  return result;
}

function startGame() {
  renderGAme();
  displayButtons("none", "inline", "inline", "none");
}

function validator(sum) {
  let message;
  if (sum < 21) {
    message = "do you want to draw a new card?";
  } else if (sum === 21) {
    message = "you have got blackjack!";
  } else {
    message = "You! are out of the game";
    displayButtons("none", "none", "none", "inline");
  }
  return message;
}
function renderGAme() {
  let sumHuman = sumArray(humanArray);
  let sumpc = sumArray(pcArray);

  let humanMessage = validator(sumHuman);

  sumHumanEl.textContent = `You card sum is : ${sumHuman}`;
  messageHumanEl.textContent = humanMessage;

  humanArray.map((index) => {
    humanCardContainer.innerHTML +=
      "<span>" + "<p>" + index + "</p>" + "</span>";
  });

  pcArray.map((index) => {
    if (pcArray[0] == index) {
      pcCardContainer.innerHTML += "<span>" + "<p>" + "c1" + "</p>" + "</span>";
    } else {
      pcCardContainer.innerHTML +=
        "<span>" + "<p>" + index + "</p>" + "</span>";
    }
  });
}

function newCard() {
  let pluscard = getRndInteger(2, 11);
  humanArray.push(pluscard);
  let sumHuman = sumArray(humanArray);

  humanCardContainer.innerHTML +=
    "<span>" + "<p>" + humanArray[humanArray.length - 1] + "</p>" + "</span>";

  sumHumanEl.textContent = `You card sum are : ${sumHuman}`;
  let message = validator(sumHuman);
  messageHumanEl.textContent = message;
}

function showPcCards() {
  pcCardContainer.innerHTML = "";
  pcArray.map((index) => {
    pcCardContainer.innerHTML += "<span>" + "<p>" + index + "</p>" + "</span>";
  });
}
function stanGame() {
  showPcCards();
}

function newGame() {
  humanArray = inicializateArray();
  pcArray = inicializateArray();
  pcCardContainer.innerHTML = "";
  humanCardContainer.innerHTML = "";
  sumHumanEl.textContent = "";
  renderGAme();
  displayButtons("none", "inline", "inline", "none");
}
