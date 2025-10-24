const locationInput = document.getElementById('locationInput');
const searchButton = document.getElementById('searchButton');

const locationElement = document.getElementById('location');
const temperature = document.getElementById('temperature');
const description = document.getElementById('description');
const temp_min = document.getElementById('temp_min');
const temp_max = document.getElementById('temp_max');
const pressure = document.getElementById('pressure');
const humidity = document.getElementById('humidity');
const speed = document.getElementById('speed');
const country = document.getElementById('country');

const apiKey = "5559fab2c8ccf938486ce7a949783174";
const url = "https://api.openweathermap.org/data/2.5/weather";

searchButton.addEventListener('click', () => {
    const locationName = locationInput.value;
    showWeatherData(locationName);
});

function showWeatherData(locationName) {
    const uri = `${url}?q=${locationName}&appid=${apiKey}&units=metric`;

    fetch(uri)
        .then(response => response.json())
        .then(data => {
            locationElement.innerHTML = `<span class="left">City :</span><span class="right">${data.name}</span>`;
            temperature.innerHTML = `<span class="left">Temperature :</span><span class="right">${data.main.temp} °C</span>`;
            description.innerHTML = `<span class="left">Description :</span><span class="right">${data.weather[0].description}</span>`;
            temp_min.innerHTML = `<span class="left">Min Temp :</span><span class="right">${data.main.temp_min} °C</span>`;
            temp_max.innerHTML = `<span class="left">Max Temp :</span><span class="right">${data.main.temp_max} °C</span>`;
            pressure.innerHTML = `<span class="left">Pressure :</span><span class="right">${data.main.pressure} N/m²</span>`;
            humidity.innerHTML = `<span class="left">Humidity :</span><span class="right">${data.main.humidity} g/m³</span>`;
            speed.innerHTML = `<span class="left">Wind Speed :</span><span class="right">${data.wind.speed} m/s</span>`;
            country.innerHTML = `<span class="left">Country :</span><span class="right">${data.sys.country}</span>`;
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
            locationElement.innerText = "City not found!";
        });


        locationInput.value = ""
}
