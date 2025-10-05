const input = document.getElementById('input')
const btn = document.querySelector('.btn')

const char = '0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ'
// console.log(char.length);


const randomPassword = () => {
    let result = '';
    let length = 15

    for(let i = 0; i< length ; i++){
        let random = Math.random() * char.length

        result += char.charAt(random);
        input.value = result
    }
    return result
}


btn.addEventListener('click', randomPassword)