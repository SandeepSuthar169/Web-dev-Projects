const time = document.getElementById("time")
const date = document.getElementById("date")


function timeDate(){
    let now = new Date()
    let hr = now.getHours() % 12 || 12
    let hrs = hr.toString().padStart(2, "0")
    let min = now.getMinutes().toString().padStart(2, "0")
    let sec  = now.getSeconds().toString().padStart(2, "0")
    let amPm = now.getHours() >= 12 ? "PM" : "AM" 

    
    const options = {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
    };
    date.innerHTML = now.toLocaleDateString(undefined, options)
    time.innerHTML = `${hrs}:${min}:${sec} ${amPm}`
    
    


}
setInterval(timeDate, 1*1000)

timeDate()