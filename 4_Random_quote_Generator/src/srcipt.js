const quotes = [
  "The best way to get started is to quit talking and begin doing.",
  "Don’t let yesterday take up too much of today.",
  "It’s not whether you get knocked down, it’s whether you get up.",
  "If you are working on something exciting, it will keep you motivated.",
  "Success is not in what you have, but who you are.",
  "The harder you work for something, the greater you’ll feel when you achieve it.",
  "Dream bigger. Do bigger.",
  "Don’t watch the clock; do what it does. Keep going.",
  "Great things never come from comfort zones.",
  "Push yourself, because no one else is going to do it for you.",
  "Success doesn’t just find you. You have to go out and get it.",
  "The key to success is to focus on goals, not obstacles.",
  "Dream it. Wish it. Do it.",
  ];
  

  const generatorButton = document.getElementById('generatorButton')
  const quoteDisplay = document.getElementById('quoteDisplay')

  
  function generatorQuote(){
        const randomIndex = Math.floor(Math.random() * quotes.length)
        const quote = quotes[randomIndex]
        quoteDisplay.innerText = quote

  }


  generatorButton.addEventListener('click', generatorQuote)