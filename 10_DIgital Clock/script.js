const digitalClock = document.querySelector('.digital-clock')
const date = document.querySelector('.date')

// new date() -->> hr variable in savein -< variable value save in 
const hour = document.querySelector('.hour')
const minute = document.querySelector('.minute')
const second = document.querySelector('.second')

function digiClock(){
    const clock = new Date()

    const clockHr = clock.getHours()
    const clockMin = clock.getMinutes()
    const colckSec = clock.getSeconds()
    
    const HR = 30 * clockHr + clockMin/2;
    const MR = 6 * clockMin;
    const SR = 6 * colckSec;

    hour.style.transform = `rotate(${HR}deg)`;
    minute.style.transform = `rotate(${MR}deg)`;
    second.style.transform = `rotate(${SR}deg)`;


    setInterval(digiClock, 1 * 1000)
}
digiClock()






function clockNumber(){
    const now = new Date()

    const hrs = now.getHours() % 12  || 12
    const hr = hrs.toString().padStart(2, "0")
    const min = now.getMinutes().toString().padStart(2, '0')
    const sec = now.getSeconds().toString().padStart(2, '0')
    const amPm = now.getHours() >= 12 ? 'AM' : 'PM';

    digitalClock.textContent = `${hr}:${min}:${sec} ${amPm}`
    setInterval(clockNumber, 1 * 1000)
}
clockNumber()



function clockDate(){
    const dates = new Date()
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    date.textContent = dates.toLocaleDateString(undefined, options)
}
clockDate()