const timerInput = document.getElementById("timerInput")
const startButton = document.getElementById('startButton')
const CountdwonDisplay = document.getElementById('CountdwonDisplay')


function coundown(){
    let  valueSecound = parseInt(timerInput.value)
    
    if(isNaN(valueSecound)){
        CountdwonDisplay.innerText = "Please enter a valid number"
        return
    }
    if(valueSecound <= 0){
        CountdwonDisplay.innerText = "Please enter value of  grater than zero "
        return
    }

    let setValues = setInterval(() => {
        valueSecound--;
        CountdwonDisplay.innerText = `Coundown start: ${valueSecound}`
        
        if(valueSecound <= 0){
            CountdwonDisplay.innerText = "Time Up"
            clearInterval(setValues)
        }
    }, 1 * 1000);

    timerInput.value = ""

}

startButton.addEventListener('click', coundown)
