const startButton = document.getElementById('startButton')
const timerInput = document.getElementById('timerInput')
const CountdwonDisplay = document.getElementById('CountdwonDisplay')


function startTimer(){
   let value =  parseInt(timerInput.value)
    if (isNaN(value)){
        CountdwonDisplay.innerHTML = 'Please eneter a valid number'
        return
    }

    if (value <= 0) {
        CountdwonDisplay.innerHTML = "Place enter grater then sec 0"
        return
    }
    const timer = setInterval(function(){
        value--;
        CountdwonDisplay.innerHTML = `Time remaining ${value} secounds`

        if(value <= 0){
            clearInterval(timer)
            CountdwonDisplay.innerText = 'Time up'
        }
        
    }, 1 * 1000)

    // console.log( value);
    
}


startButton.addEventListener('click', startTimer)