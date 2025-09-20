const loanAmount = document.getElementById('loan-amount')
const interestRate = document.getElementById('interest-rate')
const monthsToPay = document.getElementById('months-to-pay')

const payment = document.getElementById('payment')
const btn = document.getElementById('btn')

function loanCalculator(){
    let a = loanAmount.value
    let b = interestRate.value
    let c = monthsToPay.value
    console.log(a);
    

}

btn.addEventListener('click', loanCalculator)