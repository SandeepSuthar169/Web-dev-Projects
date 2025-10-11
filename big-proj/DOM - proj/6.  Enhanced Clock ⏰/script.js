const clock = document.getElementById('clock')
const dates = document.querySelector('.date')

const handHour = document.querySelector(".hour")
const handMinute = document.querySelector(".minute")
const handSecond = document.querySelector(".second")

const timeDate = () => {
    const date = new Date()
    const hr = date.getHours() % 12 || 12 
    const hrs = hr.toString().padStart(2, "0")
    const min = date.getMinutes().toString().padStart(2, "0")
    const sec = date.getSeconds().toString().padStart(2, "0")
    
    clock.innerHTML  = `${hrs}:${min}:${sec}`

    const event = new Date();
    const options = {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
      };
    dates.innerHTML = event.toLocaleDateString(undefined, options)
}

setInterval(timeDate, 1000);

const digiClock = () => {
    const digidate = new Date()

    const hr = digidate.getHours()
    const min = digidate.getMinutes()
    const sec = digidate.getSeconds()

    let HR = 30 * hr + min / 2
    let MIN = 6 * min
    let SEC = 6 * sec 

    handHour.style.transform = `rotate(${HR}deg)`
    handMinute.style.transform = `rotate(${MIN}deg)`
    handSecond.style.transform = `rotate(${SEC}deg)`

}

setInterval(digiClock, 1000);
