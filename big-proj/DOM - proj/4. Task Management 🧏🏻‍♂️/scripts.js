const addButton = document.getElementById('addButton')
const taskInput = document.getElementById('taskInput')
const taskList = document.getElementById('taskList')

function taskManeger() {
    const lis = document.createElement('li')
    lis.className = 'task-item'
    lis.innerText = taskInput.value


    const check = document.createElement('input')
    check.type = 'checkbox'
    check.className = 'complete-checkbox'



    const delbut = document.createElement('button')
    delbut.className = 'delete-button'

    delbut.addEventListener('click', () => {
        lis.remove()
    })

    const x = document.createElement('span')
    x.innerText = 'Delete'

   
    



    taskList.appendChild(lis)
    lis.appendChild(check)
    lis.appendChild(delbut)
    delbut.appendChild(x)


    taskInput.value = ''


}


addButton.addEventListener('click', taskManeger)