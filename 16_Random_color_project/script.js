const container = document.querySelector(".container")


function randomColor(r, g, b){        
    const span = document.createElement('span')
    span.className = 'color-container' 
    span.innerText = `rgb(${r}, ${b}, ${g})`
    span.style.backgroundColor = `rgb(${r}, ${b}, ${g})`

    return span
}
 
let r = Math.floor(Math.random() * 255)
let b = Math.floor(Math.random() * 255)
let g = Math.floor(Math.random() * 255)

let span = randomColor(r, g, b)
container.appendChild(span)

