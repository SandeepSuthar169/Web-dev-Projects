const value = document.querySelector('.value')
const decrease = document.querySelector('.decrease')
const increase = document.querySelector('.increase')
const reset = document.querySelector('.reset')

let a = 1
function increaseValue(){
    let b = a++
    value.innerHTML = b
}
increase.addEventListener('click', increaseValue)



function decreaseValue(){
    let b = a--
    value.innerHTML = b
}
decrease.addEventListener('click', decreaseValue)


function resetValue(){
    value.innerHTML = 0
}


reset.addEventListener('click', resetValue)