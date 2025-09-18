const bill = document.getElementById('bill')
const tip = document.getElementById("tip")
const calculate = document.getElementById('calculate')
const total = document.getElementById('total')

function tipCalculator(){
    let valueBill = parseInt(bill.value)
    let valueTip = parseInt(tip.value)

    let percentage =(( valueTip / 100) * valueBill ) + valueBill
    
    total.innerText = percentage
}

calculate.addEventListener('click', tipCalculator)