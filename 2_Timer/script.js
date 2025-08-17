function updateClock(){
     const timeDocument =  document.getElementById("time");
     const dateDocument =  document.getElementById('date');

     const now = new Date();
     const hours =  now.getHours() % 12 || 12;
     const minutes =  now.getMinutes().toString().padStart(2, "0");
     const sec = now.getSeconds().toString().padStart(2, "0")
     const amPm = now.getHours() >= 12 ? "PM" : "AM";

     const options = {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
      };
     const date =  now.toLocaleDateString(undefined, options )


     timeDocument.textContent = `${hours}:${minutes}:${sec} ${amPm}`
     dateDocument.textContent =  date
}

setInterval(updateClock, 1000);

updateClock()