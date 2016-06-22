var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

// if (cardTwo === cardFour) {
//   alert("You found a match!");
// } else if (cardOne === cardTwo) {
//   alert("You found a match!");
// } else if (cardThree === cardFour) {
//   alert("You found a match!");
// } else {
//   alert("Sorry, try again.");
// };


function createBoard() {
// iterates through for loop 4 times (maybe find a cleaner way to do this)
  for (i = 0; i < 4; i++) {
    var gameBoard = document.getElementById('game-board');
    var newCard = document.createElement('div');
    newCard.className = 'card';
    gameBoard.appendChild(newCard);
  }
}

// triggers function to create the card board
createBoard();
