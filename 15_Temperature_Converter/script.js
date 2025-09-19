const celsius = document.getElementById("celsius")
const fahrenheit = document.getElementById('fahrenheit')
const kelvin = document.getElementById('kelvin')
const input = document.querySelector("input")


function temperatoreConvertor(event){
    let tempEvent =  parseFloat(event.target.value)
    console.log(tempEvent);
    
    if (event.target.name === "celsius") {
        fahrenheit.value = tempEvent * 1.8 + 32  
        kelvin.value = tempEvent + 273.15      
    } else if (event.target.name === "fahrenheit"){
        celsius.value = tempEvent - 32 * 0.556
        kelvin.value = 1.8 * (tempEvent - 273.15) + 32
    } else if (event.target.value === "kelvin"){
        celsius.value = tempEvent - 273.15
        fahrenheit.value = (tempEvent - 32) / 1.799 + 273.15
    } 

}


// input.addEventListener("click", temperatoreConvertor)