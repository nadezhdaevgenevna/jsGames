const cards = [
  {
    name: "cheeseburger",
    img: "img/cheeseburger.png",
  },
  {
    name: "fries",
    img: "img/fries.png",
  },
  {
    name: "hotdog",
    img: "img/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "img/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "img/milkshake.png",
  },
  {
    name: "pizza",
    img: "img/pizza.png",
  },
  {
    name: "cheeseburger",
    img: "img/cheeseburger.png",
  },
  {
    name: "fries",
    img: "img/fries.png",
  },
  {
    name: "hotdog",
    img: "img/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "img/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "img/milkshake.png",
  },
  {
    name: "pizza",
    img: "img/pizza.png",
  },
];

cards.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector("#grid");
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];
const resultDisplay = document.getElementById("result");
const scoreDisplay = document.getElementById("score");

function createBoard() {
  for (let i = 0; i < cards.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "img/blank.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    gridDisplay.append(card);
  }
}
createBoard();
function checkMatch() {
  const cardsImg = document.querySelectorAll("img");
  const optionOneId = cardsChosenIds[0];
  const optionTwoId = cardsChosenIds[1];
  if (optionOneId == optionTwoId) {
    resultDisplay.innerHTML = "You have clicked the same image!";
    cardsImg[optionOneId].setAttribute("src", "img/blank.png");
    cardsImg[optionTwoId].setAttribute("src", "img/blank.png");
  } else if (cardsChosen[0] == cardsChosen[1]) {
    resultDisplay.innerHTML = "You found a match!";
    cardsImg[optionOneId].setAttribute("src", "img/white.png");
    cardsImg[optionTwoId].setAttribute("src", "img/white.png");
    cardsImg[optionOneId].removeEventListener("click", flipCard);
    cardsImg[optionTwoId].removeEventListener("click", flipCard);
    cardsWon.push(cardsChosen);
  } else {
    cardsImg[optionOneId].setAttribute("src", "img/blank.png");
    cardsImg[optionTwoId].setAttribute("src", "img/blank.png");
    resultDisplay.innerHTML = "Sorry try again!";
  }
  scoreDisplay.innerHTML = cardsWon.length;
  cardsChosen = [];
  cardsChosenIds = [];

  if (cardsWon.length == cards.length / 2) {
    scoreDisplay.innerHTML = "Congratulation you found them all!";
  }
}
function flipCard() {
  const cardId = this.getAttribute("data-id");
  cardsChosen.push(cards[cardId].name);
  cardsChosenIds.push(cardId);
  this.setAttribute("src", cards[cardId].img);
  if (cardsChosen.length === 2) {
    setTimeout(checkMatch, 500);
  }
}
