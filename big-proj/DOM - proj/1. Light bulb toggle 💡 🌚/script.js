const toggleButton = document.getElementById('toggleButton')
const bulb = document.getElementById('bulb')
const state = document.getElementById('status')


function bublOnOff(){

    if(state.textContent == 'Status: Off'){
        bulb.style.backgroundColor = 'orange'
        state.textContent = 'Status: On'
    } else {
        bulb.style.backgroundColor = '#95a5a6'
        state.textContent = 'Status: Off'
    }


}


toggleButton.addEventListener('click', bublOnOff)