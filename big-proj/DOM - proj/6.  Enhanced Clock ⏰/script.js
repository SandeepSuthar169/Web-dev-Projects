const clock = document.getElementsByClassName('digital-clock')
const date = document.getElementsByClassName('date')

const timeDate = () => {
    const date = new Date()
    
    const hr = date.getHours()
    
    // console.log(hr);

}



setInterval(timeDate, 1000);