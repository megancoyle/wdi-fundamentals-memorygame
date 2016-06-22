var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

function createBoard() {
  // iterates through for loop 4 times (maybe find a cleaner way to do this)
  for (i = 0; i < cards.length; i++) {
    var gameBoard = document.getElementById('game-board');
    var newCard = document.createElement('div');
    newCard.className = 'card';
    // sets data-card to be the element of the array
    newCard.setAttribute('data-card', cards[i]);
    // when a card is clicked the function isTwoCards will run
    newCard.addEventListener('click', isTwoCards);
    gameBoard.appendChild(newCard);
  }
}

//checks to see if there are cards in play
function isTwoCards() {
  cardsInPlay.push(this.getAttribute('data-card'));
    if (this.getAttribute('data-card') === 'king') {
      this.innerHTML = "<img src='http://i.imgur.com/tejimDE.png'>";
    } else {
      this.innerHTML = "<img src='http://i.imgur.com/ycXUX9n.png'>";
    }

  // if you have two cards in play check for a match
  if (cardsInPlay.length === 2) {

    // pass the cardsInPlay as an argument to isMatch function
    isMatch(cardsInPlay);

    // clear cards in play array for next try
    cardsInPlay = [];
    var green = document.getElementsByClassName('card');
    green.innerHTML = '';
  }
}

var isMatch = function(){
  if(cardsInPlay[0] === cardsInPlay[1]){
    alert('You found a match!');
    } else {
   	  alert("No Match!");
   }
   // reset card display by looping through divs
   var reset = document.getElementsByClassName('card');
   var resetCards = [reset[0], reset[1], reset[2], reset[3]];
   for(var i = 0; i < resetCards.length; i++){
    resetCards[i].innerHTML = " ";
   }
}

// triggers function to create the card board
createBoard();
