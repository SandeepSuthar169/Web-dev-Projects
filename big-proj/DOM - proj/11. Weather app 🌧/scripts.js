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
            locationElement.innerText = `City :  ${data.name}`;
            temperature.innerText = `Temperature : ${data.main.temp} °C`;
            description.innerText = `Description : ${data.weather[0].description}`;
            temp_min.innerText = `Minimum Temperature : ${data.main.temp_min} °C`;
            temp_max.innerText = `Maximum Temperature : ${data.main.temp_max} °C`;
            pressure.innerText = `Pressure : ${data.main.pressure} N/m²`;
            humidity.innerText = `Humidity : ${data.main.humidity} g/m³`;
            speed.innerText = `Wind Speed : ${data.wind.speed}`;
            country.innerText = `Country : ${data.sys.country}`;

        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
            locationElement.innerText = "City not found!";
        });


        locationInput.value = ""
}
