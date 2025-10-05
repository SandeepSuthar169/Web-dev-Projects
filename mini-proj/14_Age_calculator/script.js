const birthday = document.getElementById("birthday")
const btn = document.getElementById("btn")
const result = document.getElementById('result')

function ageCalculator(){
    let age = parseInt(birthday.value)
    if(isNaN(age)){
        result.innerHTML = "Enter valid your age"
    } else {
        let nowDate = new Date()
        let year = nowDate.getFullYear()
        
        result.innerHTML = `Your age is ${year - age} year old`
    }
}


btn.addEventListener("click", ageCalculator)