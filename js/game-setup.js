const gameBoard = document.getElementById('game-board');

const totalCards = 24;

// Function to create cards
function createCard() {
  const card = document.createElement('div');
  card.classList.add('card');

  const cardFront = document.createElement('div');
  cardFront.classList.add('card-front')

  const cardBack = document.createElement('div');
  cardBack.classList.add('card-back')

  card.appendChild(cardFront);
  card.appendChild(cardBack);

  return card;
}

// Generate 24 cards
for (let i = 0; i < totalCards; i++) {
  const card = createCard();
  gameBoard.appendChild(card);
}