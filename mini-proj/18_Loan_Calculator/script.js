const loanAmount = document.getElementById('loan-amount')
const interestRate = document.getElementById('interest-rate')
const monthsToPay = document.getElementById('months-to-pay')

const payment = document.getElementById('payment')
const btn = document.getElementById('btn')

function loanCalculator(){
    let P = parseInt(loanAmount.value)
    let r = parseInt(interestRate.value)
    let n =  parseInt(monthsToPay.value)
    let i = (r / 12 * 100).toFixed(3)

    let EMI = (((P * i) * (1+ i)**n)/ ((1+i)**n -1)).toFixed(3)
    
    payment.innerText = `Monthly Payment: ${EMI}` 
}

btn.addEventListener('click', loanCalculator)