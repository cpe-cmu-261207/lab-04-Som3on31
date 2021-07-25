/* Your code here */

let currentInput = ''
let list = {
    toDo: [],
    finished: []
}

//load stuff
list.toDO = JSON.parse(localStorage.getItem(list.toDO))
list.finished = JSON.parse(localStorage.getItem(list.finished))

//input field
const input = document.createElement('input')
input.placeholder = 'Add your todo list here'
input.setAttribute("class", "border-2 border-black mr-2")

input.addEventListener('input', event => {
    currentInput = event.target.value
})
input.addEventListener('keyup', event => {
    if (event.keyCode === 13 && currentInput === '') alert('Task cannot be empty.')
    else if (event.keyCode === 13 && currentInput !== '') {
        addTask();
    }
})

const mainDiv = document.createElement('div')

//button
const button = document.createElement('button')
button.innerHTML = '+'
button.setAttribute("class", "border-2 border-black")

button.addEventListener('click', event => {
    if (currentInput === '') alert('Task cannot be empty.')
    else {
        addTask();
    }
})

const runner = document.getElementById('tester')
runner.append(input)
runner.append(button)

//core function
function addTask() {
    const divTask = document.createElement('div')
    divTask.setAttribute("class","flex-row")

    //toggle button visibility
    divTask.addEventListener('mouseenter', () => {
        deleteButton.style.visibility = 'visible'
        finishButton.style.visibility = 'visible'
    })
    divTask.addEventListener('mouseleave', () => {
        deleteButton.style.visibility = 'hidden'
        finishButton.style.visibility = 'hidden'
    })

    //to enter message
    const div = document.createElement('div')
    div.innerHTML = currentInput
    div.setAttribute("class", "flex-row justify-between")
    divTask.append(div)


    const buttonDiv = document.createElement('div')

    //delete button
    const deleteButton = document.createElement('button')
    deleteButton.innerHTML = 'Delete'
    deleteButton.setAttribute("class", "border-2 border-black bg-red-200 my-2 mx-2")
    deleteButton.addEventListener('click', () => {
        runner.removeChild(divTask)
    })

    //"done" button
    const finishButton = document.createElement('button')
    finishButton.innerHTML = 'Done'
    finishButton.setAttribute("class", "border-2 border-black bg-green-200 my-2")
    finishButton.addEventListener('click', () => {
        div.innerHTML = div.innerHTML.strike()
    })
    deleteButton.style.visibility = 'hidden'
    finishButton.style.visibility = 'hidden'

    div.append(finishButton)
    div.append(deleteButton)
    div.append(buttonDiv)


    runner.append(divTask)
}


document.body.append(mainDiv)