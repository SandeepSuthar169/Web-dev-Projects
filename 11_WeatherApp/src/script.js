const city = document.getElementById('city')
const temp = document.getElementById('temp')
const humidity = document.getElementById('humidity')
const wind = document.getElementById('wind')
const search = document.getElementById('search')
const button = document.getElementById('button')






const apikey = "ec7ab8d55e25b3d9e5f755949d94dbd7";

const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`


async function WeatherData(city) {
    const responcse = await fetch(url  + city + `&appid=${apikey}`)
    let Data = await responcse.json();
    console.log(Data);
    

    city.innerHTML = Data.name
    temp.innerHTML = Math.round(Data.main.temp) + "°C"
    humidity.innerHTML = Data.main.humidity + "%"
    wind.innerHTML = Data.wind.speed + " km/h";

    console.log(Data);
    
}

search.addEventListener("click", () => {
    WeatherData()

})
