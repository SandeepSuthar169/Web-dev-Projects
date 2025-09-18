const bill = document.getElementById('bill')
const tip = document.getElementById("bill")
const calculate = document.getElementById('calculate')
const total = document.getElementById('total')

function tipCalculator(){
    let valueBill = parseInt(bill.value)
    let valueTip = parseInt(tip.value)

    let percentage  = parseInt( valueTip + 100) 
    console.log(percentage);
    
    

}

calculate.addEventListener('click', tipCalculator)