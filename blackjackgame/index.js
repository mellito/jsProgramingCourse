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
let winnerEl = document.getElementById("winner-el");

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

function renderGAme() {
  let sumHuman = sumArray(humanArray);

  sumHumanEl.textContent = `You card sum is : ${sumHuman}`;

  humanArray.map((index) => {
    humanCardContainer.innerHTML +=
      "<span>" + "<p>" + index + "</p>" + "</span>";
  });

  pcArray.map((index) => {
    if (pcArray[1] == index) {
      pcCardContainer.innerHTML += "<span>" + "<p>" + "c1" + "</p>" + "</span>";
    } else {
      pcCardContainer.innerHTML +=
        "<span>" + "<p>" + index + "</p>" + "</span>";
    }
  });
}

function startGame() {
  messageHumanEl.textContent = "";
  renderGAme();
  displayButtons("none", "inline", "inline", "none");
}

function newCard() {
  let pluscard = getRndInteger(2, 11);
  humanArray.push(pluscard);
  let sumHuman = sumArray(humanArray);

  humanCardContainer.innerHTML +=
    "<span>" + "<p>" + humanArray[humanArray.length - 1] + "</p>" + "</span>";

  sumHumanEl.textContent = `You card sum are : ${sumHuman}`;

  if (sumHuman == 21) {
    winnerEl.textContent = `You win`;
    displayButtons("none", "none", "none", "inline");
  } else if (sumHuman > 21) {
    winnerEl.textContent = `Pc win`;
    displayButtons("none", "none", "none", "inline");
  }
}

function newCardPc() {
  let sumHuman = sumArray(humanArray);
  let sumpc = sumArray(pcArray);

  pcCardContainer.innerHTML = "";
  pcArray.map((index) => {
    pcCardContainer.innerHTML += "<span>" + "<p>" + index + "</p>" + "</span>";
  });

  while (sumpc < 21 && sumHuman > sumpc) {
    let pluscard = getRndInteger(2, 11);
    pcArray.push(pluscard);
    sumpc = sumArray(pcArray);
    pcCardContainer.innerHTML +=
      "<span>" + "<p>" + pcArray[humanArray.length - 1] + "</p>" + "</span>";
  }

  pcHumanEl.textContent = `Pc card sum is : ${sumpc}`;
}

function stanGame() {
  newCardPc();
  let sumHuman = sumArray(humanArray);
  let sumpc = sumArray(pcArray);

  console.log(sumHuman);
  console.log(sumpc);
  if (sumHuman > sumpc) {
    winnerEl.textContent = `You win`;
  } else if (sumpc > 21) {
    winnerEl.textContent = `You win`;
  } else {
    winnerEl.textContent = `Pc win`;
  }

  displayButtons("none", "none", "none", "inline");
}

function newGame() {
  humanArray = inicializateArray();
  pcArray = inicializateArray();
  pcCardContainer.innerHTML = "";
  humanCardContainer.innerHTML = "";
  sumHumanEl.textContent = "";
  pcHumanEl.textContent = "";
  winnerEl.textContent = "";
  renderGAme();
  displayButtons("none", "inline", "inline", "none");
}
