/* Your code here */

let currentInput = ''
let list = {
    toDo: [],
    finished: []
}

const input = document.createElement('input')
input.innerHTML = 'Add your todo here'

input.addEventListener('input', event => {
    currentInput = event.target.value
})
input.addEventListener('keyup', event => {
    if (event.keyCode === 13 && currentInput === '') alert ('List cannot be empty.')
})

const button = document.createElement('button')
button.innerHTML = '+'

input.addEventListener('click', event =>{
    if (currentInput === '') alert ('List cannot be empty.')
    else{
        
    }
})

document.body.append(input)
document.body.append(button)
