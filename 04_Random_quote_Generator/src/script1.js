const quotes = [
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "Do what you can, with what you have, where you are.",
    "Happiness is not something ready made. It comes from your own actions.",
    "In the middle of every difficulty lies opportunity.",
    "Dream big and dare to fail.",
    "It always seems impossible until it's done.",
    "Don’t count the days, make the days count.",
    "Act as if what you do makes a difference. It does.",
    "The best way to get started is to quit talking and begin doing.",
    "Believe you can and you're halfway there.",
    "Your limitation—it’s only your imagination.",
    "Push yourself, because no one else is going to do it for you.",
    "Great things never come from comfort zones.",
    "Dream it. Wish it. Do it.",
    "Little things make big days."
  ];

const quoteDisplay  = document.getElementById('quoteDisplay')
const generatorButton =document.getElementById('generatorButton')


function generatorQuotes(){
    let random = Math.floor(Math.random() * quotes.length)

    quoteDisplay.innerText = quotes[random]
    
    
}

generatorButton.addEventListener('click', generatorQuotes)