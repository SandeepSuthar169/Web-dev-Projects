const  x = document.getElementById('number1')
const  y = document.getElementById('number2')
const result = document.getElementById('result')



function calculate(operation){
    const num1 = parseInt(x.value)
    const num2 = parseInt(y.value)


    if(isNaN(num1) || isNaN(num2)) {
        result.innerText = "Plase enter a valud number"
        return
    }
    

    switch (operation){
        case '+': {
            result.innerText = `Sum: ${num1 + num2} `
        }
        break
        case '-': {
            result.innerText = `subtract: ${num1 - num2} `
        }
        break
        case '*': {
             result.innerText = `multiplay: ${num1 * num2} `
        }
        break
        case '/': {
            if (num2 === 0){
              result.innerHTML = "Cannot devide by zero "
            } else{
                result.innerText = `Divide = : ${num1 / num2}`
                }
        }
        break
        
    }
}