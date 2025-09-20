const bars = document.querySelector('.fa-bars')
const sidebar = document.querySelector('.sidebar')
const closingBTN = document.querySelector('.fa-times')


function a(){
    sidebar.classList.toggle('show-sidebar')
}
bars.addEventListener('click', a)


function b(){
    sidebar.classList.remove('show-sidebar')
}
closingBTN.addEventListener('click', b)



