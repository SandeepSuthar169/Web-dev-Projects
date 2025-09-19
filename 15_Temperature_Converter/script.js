const celsius = document.getElementById("celsius")
const fahrenheit = document.getElementById('fahrenheit')
const kelvin = document.getElementById('kelvin')
const input = document.querySelector("input")


function computeTemp(event){
    let tempEvent =  parseFloat(event.target.value)
    console.log(tempEvent);

    if(isNaN(tempEvent)){
        celsius.value = ""
        fahrenheit.value = ""
        kelvin.value = ""
        return
    }
    
    if (event.target.name === "celsius") {
        fahrenheit.value = tempEvent * 1.8 + 32  
        kelvin.value = tempEvent + 273.15      

    } else if (event.target.name === "fahrenheit"){
        celsius.value = tempEvent - 32 * 0.556
        kelvin.value = 1.8 * (tempEvent - 273.15) + 32
    
    } else if (event.target.name === "kelvin"){
        celsius.value = tempEvent - 273.15
        fahrenheit.value = (tempEvent - 273.32) * 1.8 + 32
    } 
}

