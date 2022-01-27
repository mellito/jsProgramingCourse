let cards = [];
let sum = 0;
let hasBlackjack = false;
let isAlive = true;
let message = "";
let playerData = [
  {
    name: "mellito",
    chips: 145,
  },
];

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");
let playerEl = document.getElementById("player-el");

playerEl.textContent = playerData[0].name + " : $" + playerData[0].chips;

function getRandomCard() {
  let result = Math.floor(Math.random() * 13) + 1;

  if (result == 1) {
    return 11;
  } else if (result >= 11) {
    return 10;
  } else {
    return result;
  }
}

const startGame = () => {
  let firstCard = getRandomCard();
  let seconCard = getRandomCard();
  cards = [firstCard, seconCard];
  sum = firstCard + seconCard;
  hasBlackjack = false;
  isAlive = true;
  renderGame();
};

const renderGame = () => {
  cardEl.textContent = "cards: ";

  for (let index = 0; index < cards.length; index++) {
    cardEl.textContent += cards[index] + " ";
  }

  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want ti draw a new card";
  } else if (sum === 21) {
    message = "you have got Blackjack";
    hasBlackjack = true;
  } else {
    message = "you are out of the game !";
    isAlive = false;
  }

  messageEl.textContent = message;
};
//only allow the player to get a new card if she isAlive and does not have blackjack
const newCard = () => {
  if (isAlive === true && hasBlackjack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
};
