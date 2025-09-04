const dice = document.getElementById('dice')
const rollButton = document.getElementById('rollButton')
const resultMessage = document.getElementById('resultMessage')


function rollDice(){
    const diceCode = ["\u2680", "\u2681", "\u2682", "\u2683", "\u2684", "\u2685"]
    const randomIndex = Math.floor(Math.random() * diceCode.length )
    
    dice.textContent = diceCode[randomIndex]
    resultMessage.textContent = `Dice value show number is ${randomIndex + 1}`

}

rollButton.addEventListener('click', rollDice)