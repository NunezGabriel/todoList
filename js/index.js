let todoName = document.querySelector('.tarea')
let duedate = document.querySelector('.duedate')
let botonSend = document.querySelector('.botonSend')
let seccionTodos = document.querySelector('.todoListContainer')

botonSend.addEventListener('click', send)

function send(){
    let todoListItem = document.createElement('P')
    todoListItem.innerHTML = `${todoName.value} --- ends: ${duedate.value}`
    seccionTodos.appendChild(todoListItem)
}