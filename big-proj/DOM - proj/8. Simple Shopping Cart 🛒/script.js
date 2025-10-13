const button = document.querySelectorAll('button')
const h3 = document.querySelector('#cart-total h3')

let consts = 0;
let T_Shirt = 19.99;
let Jeans = 49.99;
let Sneakers = 79.99
let Hat = 24.99


function addAmount(){
  consts = consts +  T_Shirt
  consts = consts +  Jeans
  consts = consts +  Sneakers
  consts = consts +  Hat

  h3.innerHTML = `Total: $${consts}`
}


button.forEach(btn => {
  btn.addEventListener('click', addAmount)
})