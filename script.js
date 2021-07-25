/* Your code here */

let currentInput = ''
let list = {
    toDo: [],
    finished: []
}

list.toDO = JSON.parse(localStorage.getItem())
list.finished = JSON.parse(localStorage.getItem())

const input = document.createElement('input')
input.placeholder = 'Add your todo list here'

input.addEventListener('input', event => {
    currentInput = event.target.value
})
input.addEventListener('keyup', event => {
    if (event.keyCode === 13 && currentInput === '') alert('Task cannot be empty.')
    else if(event.keyCode === 13 && currentInput !== ''){
        addTask();
    }
})

const mainDiv = document.createElement('div')

const button = document.createElement('button')
button.innerHTML = '+'

button.addEventListener('click', event => {
    if (currentInput === '') alert('Task cannot be empty.')
    else {
        addTask();
    }
})

const runner = document.getElementById('tester')
runner.append(input)
runner.append(button)

function addTask() {
    const divTask = document.createElement('div')

    divTask.addEventListener('mouseenter', () => {
        deleteButton.style.visibility = 'visible'
        finishButton.style.visibility = 'visible'
    })

    divTask.addEventListener('mouseleave', () => {
        deleteButton.style.visibility = 'hidden'
        finishButton.style.visibility = 'hidden'
    })

    const div = document.createElement('div')
    div.innerHTML = currentInput
    divTask.append(div)

    const deleteButton = document.createElement('button')
    deleteButton.innerHTML = 'Delete'
    deleteButton.addEventListener('click', () => {
        runner.removeChild(divTask)
    })

    const finishButton = document.createElement('button')
    finishButton.innerHTML = 'Done'
    finishButton.addEventListener('click', () => {
        div.innerHTML = div.innerHTML.strike()
    })
    deleteButton.style.visibility = 'hidden'
    finishButton.style.visibility = 'hidden'

    divTask.append(finishButton)
    divTask.append(deleteButton)

    divTask.append(document.createElement('br'))
    runner.append(divTask)
}


document.body.append(mainDiv)
