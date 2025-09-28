
const locationInput = document.getElementById('locationInput')
const searchButton = document.getElementById('searchButton')
const locationELement = document.getElementById('location')
const temperatureElement = document.getElementById('temperature')
const descriptionElement = document.getElementById('description')

const apikey = '2cf3afc2f77f6955f35d88483a61beed';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

searchButton.addEventListener('click', () => {
    const location = locationInput.value
        feathWeathr(location)
})

function feathWeathr(location){
    const url = `${apiUrl}?q=${location}&appid=${apikey}&units=metric`

    fetch(url)
    .then(Response => Response.json())
    .then(data => {
        locationELement.innerText = data.name;
        temperatureElement.innerText = Math.round(data.main.temp);
        descriptionElement.innerText = data.weather[0].description;
    } )
    .catch( error => {
        console.log("error", error)
    })
}





