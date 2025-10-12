const containers  = document.querySelectorAll('.accordion-item')

function activeToggle(){
  this.classList.toggle('active')
}


containers.forEach(items => {
  items.addEventListener('click', activeToggle)
})

