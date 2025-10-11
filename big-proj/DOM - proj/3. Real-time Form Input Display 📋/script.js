const nameInput = document.getElementById('nameInput')
const nameDisplay = document.getElementById('nameDisplay')

const jobInput = document.getElementById('jobInput')
const jobDisplay = document.getElementById('jobDisplay')

const ageInput = document.getElementById('ageInput')
const ageDisplay = document.getElementById('ageDisplay')

const bioInput = document.getElementById('bioInput')
const bioDisplay = document.getElementById('bioDisplay')

nameInput.addEventListener('input', () => {
    nameDisplay.innerHTML = nameInput.value
})
jobInput.addEventListener('input', () => {
    jobDisplay.innerHTML = jobInput.value
})
ageInput.addEventListener('input', () => {
    ageDisplay.innerHTML = ageInput.value
})
bioInput.addEventListener('input', () => {
    bioDisplay.innerHTML = bioInput.value
})


