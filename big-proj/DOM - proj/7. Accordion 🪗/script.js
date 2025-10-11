// const containers  = document.querySelectorAll('accordion-item')

// const accordion = () => {
//     this.classList.toggle('active')
// }


// for(let i = 0; i< containers.length; i++){
//     containers[i].addEventListener('click', accordion)
// }

document.querySelectorAll('.accordion-item').forEach(item => {
    item.addEventListener('click', function() {
      this.classList.toggle('active');
    });
  });
  