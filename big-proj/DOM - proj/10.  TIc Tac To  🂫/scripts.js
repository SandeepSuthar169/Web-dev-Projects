const h3 = document.querySelector('h3')



let currnetPlayer = "X"
let arr = Array(9).fill(null)




function checkWinner(){
  if(
    (arr[0]  && arr[0] == arr[1] && arr[2]) || 
    (arr[3]  && arr[3] == arr[4] && arr[5]) || 
    (arr[6]  && arr[6] == arr[7] && arr[8]) || 

    (arr[0]  && arr[0] == arr[3] && arr[6]) || 
    (arr[1]  && arr[1] == arr[4] && arr[7]) || 
    (arr[2]  && arr[2] == arr[5] && arr[8]) || 

    (arr[0]  && arr[0] == arr[4] && arr[8]) || 
    (arr[2]  && arr[2] == arr[4] && arr[6]) 
  ){
    h3.innerHTML = `winner is ${currnetPlayer} `
    return 
  } 

  if(!arr.some((e) => e === null )){
    h3.innerHTML = `Draw!!`
    return
  }

}


function handleClick(e){
  const id = Number(e.id)

  if(arr[id] !== null) {
    return
  }


  arr[id] = currnetPlayer
  e.innerText = currnetPlayer

  
  checkWinner()
  
  if (currnetPlayer === "X") {
    currnetPlayer = "O";
  } else {
    currnetPlayer = "X";
  }




  
  
  
}