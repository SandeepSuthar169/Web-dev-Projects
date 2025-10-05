const result = document.getElementById('result')
const input = document.getElementById('input')


const poundCount = () => {
    let pound = parseInt(input.value)

    let kg = parseFloat(pound * 0.45359237)
    result.innerHTML = kg

}

input.addEventListener('input', poundCount)