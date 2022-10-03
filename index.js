const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    }
]

cardArray.sort(() => 0.5 - Math.random())
const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#memoryGamescore')
const chances = document.querySelector('#chances')
let chanceNo = 0


let cardchosen = []
let cardchosenIds = []
const cardsWon = []

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipcard)
        gridDisplay.appendChild(card)

    }
}

createBoard()

function checkMatch() {
    const cards = document.querySelectorAll('#grid img')
    const optionId1 = cardchosenIds[0]
    const optionId2 = cardchosenIds[1]
    console.log(cards)
    console.log('check for match')
    if (optionId1 == optionId2) {
        cards[optionId1].setAttribute('src', 'images/blank.png')
        cards[optionId2].setAttribute('src', 'images/blank.png')
    }
    if (cardchosen[0] == cardchosen[1]) {
        console.log('Found Match')
        cards[optionId1].setAttribute('src', 'images/white.png')
        cards[optionId2].setAttribute('src', 'images/white.png')
        cards[optionId1].removeEventListener('click', flipcard)
        cards[optionId2].removeEventListener('click', flipcard)
        cardsWon.push(cardchosen)
    } else {
        cards[optionId1].setAttribute('src', 'images/blank.png')
        cards[optionId2].setAttribute('src', 'images/blank.png')
    }

    cardchosen = []
    cardchosenIds = []
    resultDisplay.textContent = cardsWon.length

    if (cardsWon.length == cardArray.length / 2) {
        resultDisplay.textContent = "You found Them all"
    }
}

function flipcard() {
    const cardId = this.getAttribute('data-id')
    cardchosen.push(cardArray[cardId].name)
    cardchosenIds.push(cardId)
    console.log(cardchosen)
    console.log(cardchosenIds)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardchosen.length === 2) {
        chanceNo = chanceNo + 1
        document.getElementById('chances').innerHTML = chanceNo
        setTimeout(checkMatch, 500)
    }
}












