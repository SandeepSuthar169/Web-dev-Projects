const colorButton = document.getElementById('colorButton')
const body = document.querySelector('body')

function changeBGColor(){
    let red = Math.floor(Math.random() * 255)
    let blue = Math.floor(Math.random() * 255)
    let green = Math.floor(Math.random() * 255)
    body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`

}

colorButton.addEventListener('click', changeBGColor)