/* Your code here */

let currentInput = ''
let list = {
    toDo: [],
    finished: []
}

//for loading local storage

list.toDo = JSON.parse(localStorage.getItem(toDo))

list.finished = JSON.parse(localStorage.getItem(finished))

if (list.toDo === null) list.toDo = []
if (list.finished === null) list.finished = []

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
        list.toDo.push(currentInput)
        localStorage.setItem('list.toDo', JSON.stringify(list.toDo))
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
        list.toDO.push(currentInput)
        localStorage.setItem('list.toDo', JSON.stringify(list.toDo))
        addTask();
    }
})

const runner = document.getElementById('tester')

const completedTask = document.getElementById('finished')
completedTask.style.textDecoration = 'line-through'

const halp = document.getElementById('inputter')

halp.append(input)
halp.append(button)


//core function
function addTask() {
    const divTask = document.createElement('div')
    divTask.setAttribute("class", "flex justify-between flex-row max-w-screen-md")

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
    const textDiv = document.createElement('div')
    textDiv.innerHTML = currentInput
    div.append(textDiv)
    div.setAttribute("class", "flex-row justify-between flex")
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
        list.finished.push(textDiv.innerHTML)
        list.toDo.splice(list.toDo.indexOf('div.innerText'), 1)
        localStorage.setItem('list.finished', JSON.stringify(list.finished))


        buttonDiv.removeChild(deleteButton)
        buttonDiv.removeChild(finishButton)
        runner.removeChild(divTask)
        completedTask.append(divTask)   //done task and it must be striked.
    })

    //default visability
    deleteButton.style.visibility = 'hidden'
    finishButton.style.visibility = 'hidden'

    buttonDiv.append(finishButton)
    buttonDiv.append(deleteButton)
    div.append(buttonDiv)

    runner.append(divTask)
}

document.body.append(mainDiv)

