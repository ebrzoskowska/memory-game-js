document.addEventListener('DOMContentLoaded', () => {

  // create array with cards objects
  const cardsArr = [
    {
      name: 'captain',
      img: 'images/captain.png'
    },
    {
      name: 'captain',
      img: 'images/captain.png'
    },
    {
      name: 'jollyroger',
      img: 'images/jollyroger.png'
    },
    {
      name: 'jollyroger',
      img: 'images/jollyroger.png'
    },
    {
      name: 'pirateship',
      img: 'images/pirateship.png'
    },
    {
      name: 'pirateship',
      img: 'images/pirateship.png'
    },
    {
      name: 'pirate',
      img: 'images/pirate.png'
    },
    {
      name: 'pirate',
      img: 'images/pirate.png'
    },
    {
      name: 'sabers',
      img: 'images/sabers.png'
    },
    {
      name: 'sabers',
      img: 'images/sabers.png'
    },
    {
      name: 'parrot',
      img: 'images/parrot.png'
    },
    {
      name: 'parrot',
      img: 'images/parrot.png'
    },
  ]

  // randomly sort cards arrays
  cardsArr.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.game-grid-container')
  const result = document.querySelector('#result')

  let pickedCard = [];
  let pickedCardId = [];
  let matchedCards = [];

  // randomly sort cards arrays
  function createBoard() {
    for (i = 0; i < cardsArr.length; i++) {
      const card = document.createElement('img')
      card.setAttribute('src', 'images/black.png')
      card.setAttribute('card-id', i)
      card.addEventListener('click', turnCard)
      grid.appendChild(card)
    }
  }

  // match cards function
  function matchCard() {
    const all_cards = document.querySelectorAll('img')
    const firstCardId = pickedCardId[0]
    const secondCardId = pickedCardId[1]

    if (pickedCard[0] === pickedCard[1]) {
      all_cards[firstCardId].setAttribute('src', 'images/white.png')
      all_cards[secondCardId].setAttribute('src', 'images/white.png')
      all_cards[firstCardId].removeEventListener('click', turnCard)
      all_cards[secondCardId].removeEventListener('click', turnCard)
      alert ('YOU GOT A MATCH!')
      matchedCards.push(pickedCard)
    } else {
      alert ('Aaaarrrrgggghhhh! NOT THIS TIME, TRY AGAIN!')
      all_cards[firstCardId].setAttribute('src', 'images/black.png')
      all_cards[secondCardId].setAttribute('src', 'images/black.png')
    }

    pickedCard = []
    pickedCardId = []

    result.textContent = matchedCards.length
    if (matchedCards.length === cardsArr.length/2) {
      result.textContent = 'CONGRRRRATS! GROG BARREL FOR YOU!'
    }
  }

    // turn card function
    function turnCard() {
      let card_nmbr = this.getAttribute('card-id');
      pickedCard.push(cardsArr[card_nmbr].name)
      pickedCardId.push(card_nmbr)
      this.setAttribute('src', cardsArr[card_nmbr].img)
      if (pickedCard.length === 2) {
        setTimeout(matchCard, 400);
      }
    }

  createBoard();
})