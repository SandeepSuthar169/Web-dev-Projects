const mainHeading = document.getElementById('mainHeading')
const redButton = document.getElementById('redButton')
const greenButton = document.getElementById('greenButton')
const blueButton = document.getElementById('blueButton')
const purpleButton = document.getElementById('purpleButton')
const resetButton = document.getElementById('resetButton')


redButton.addEventListener('click', function changeTextColor(){
    mainHeading.style.color = redButton.textContent
})
purpleButton.addEventListener('click', function changeTextColor(){
    mainHeading.style.color = redButton.textContent
})
greenButton.addEventListener('click', function changeTextColor(){
    mainHeading.style.color = greenButton.textContent
})
blueButton.addEventListener('click', function changeTextColor(){
    mainHeading.style.color = blueButton.textContent
})
resetButton.addEventListener('click', function changeTextColor(){
    mainHeading.style.color = 'white'
})


