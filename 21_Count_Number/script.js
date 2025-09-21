const value = document.querySelector('.value')
const decrease = document.querySelector('.decrease')
const increase = document.querySelector('increase')
const reset = document.querySelector('reset')

let a = 0
function decreaseValue(){
    let b = a++
    value.innerHTML = b
}

decrease.addEventListener('click', decreaseValue)

