// const buttons = document.getElementById('buttons')

const number1 = document.getElementById('number1')
const number2 = document.getElementById('number2')

const  result = document.getElementById('result')


function calculator(opration){
    let input1 = parseInt(number1.value)
    let input2 = parseInt(number2.value)


    switch (opration) {
        case '+' :
            result.innerText =  input1 + input2
        //     break;
    
        // default:
            // break;
    }

}

// buttons.addEventListener('click', calculator)