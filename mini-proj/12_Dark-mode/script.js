const darkMode = document.getElementById("dark-mode")
const body = document.querySelector("body")

function darkmodefuntion(){
    if(body.style.backgroundColor == "black"){
        body.style.backgroundColor = "white"

    } else   {
        body.style.backgroundColor = "black"
    }

}

darkMode.addEventListener("click", darkmodefuntion)