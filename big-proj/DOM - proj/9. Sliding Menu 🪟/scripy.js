const toggle_btn = document.querySelector('.toggle-btn')
const close_btn = document.querySelector('.close-btn')

const panel = document.querySelector('.panel')


toggle_btn.addEventListener('click', () => {
    panel.classList.toggle('close-btn')
})

close_btn.addEventListener('click', () => {
    panel.classList.toggle('close-btn')
})