const number1 = document.getElementById('number1')
const number2 = document.getElementById('number2')

const result = document.getElementById('result')


function calculate(operation){
    let a = parseInt(number1.value)
    let b = parseInt(number2.value)
    // return

    switch (operation) {
        case "+": {
            result.innerText = a + b;
        }
        break; 
        case "-": {
            result.innerText = a - b;
        }
        break; 
        case "*": {
            result.innerText = a * b;
        }
        break; 
        case "/": {
            if (b === 0) {
                result.innerText = "divide by is not defined ";
                
            }else{
                result.innerText = a / b;
            }
        }
        break; 
        
    }

}


