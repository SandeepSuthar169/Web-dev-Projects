
const images = [
  {
    'name': 'CSS',
    'img': 'http://thapatechnical.online/logos/css.png',
  },
  {
      'name': 'HTML',
      'img': 'http://thapatechnical.online/logos/html5.png',
  },
  {
      'name': 'jQuery',
      'img': 'http://thapatechnical.online/logos/jquery.png',
  },
  {
      'name': 'JS',
      'img': 'http://thapatechnical.online/logos/js.png',
  },
  {
      'name': 'Node',
      'img': 'http://thapatechnical.online/logos/nodejs.png',
  },
  {
      'name': 'Python',
      'img': 'http://thapatechnical.online/logos/python.png',
  }

];


const parentDiv = document.getElementById('card-section')

parentDiv.addEventListener('click', (e) => {
  let eventCard = e.target;

  eventCard.className = "card-selected"
})


for(let i = 0; i < images.length; i++){

  const childDiv = document.createElement('div')
  childDiv.className = "card"

  childDiv.dataset.name = images[i].name
  childDiv.style.backgroundImage = `url(${images[i].img})`

  parentDiv.appendChild(childDiv)
}

