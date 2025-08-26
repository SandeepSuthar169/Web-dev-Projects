const inputText = document.getElementById('inputText')
const checkButton = document.getElementById('checkButton')
const resultMessage = document.getElementById('resultMessage')

// ssandeep suthat

function Palindrome_Checker(){
        const text = inputText.value.toLowerCase().replace(/[a-z0-9A-Z] /, '')
        const reverseText = inputText.value.split("").reverse().join("")

        if(text === reverseText){
            resultMessage.innerText =  ` ${inputText.value} YES Palindrome word`
        }  else {
            resultMessage.innerText =  ` ${inputText.value} no Palindrome word`
        }
        
}

checkButton.addEventListener('click', Palindrome_Checker)