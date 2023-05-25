let todoName = document.querySelector('.tarea')
let duedate = document.querySelector('.duedate')
let botonSend = document.querySelector('.botonSend')
let seccionTodos = document.querySelector('.todoListContainer')
let seccionDone = document.querySelector('.done')
botonSend.addEventListener('click', send)

function send(){
    let space = document.createElement('BR')
    let copy = document.createElement('P')
    let todoInput = document.createElement('INPUT')
    todoInput.setAttribute('name', 'caja')
    todoInput.setAttribute('type', 'checkbox')
    let todoListItem = document.createElement('LABEL')
    todoListItem.setAttribute('for', 'caja')
    todoListItem.innerHTML = `📌${todoName.value} -> Ends: ${duedate.value}    `
    copy.innerHTML = todoListItem.textContent
    seccionTodos.appendChild(todoListItem)
    seccionTodos.appendChild(todoInput)
    seccionTodos.appendChild(space)

    todoInput.addEventListener('change', ()=>{
        if (todoInput.checked) {
            todoListItem.classList.add("marcado");
            seccionDone.appendChild(copy)
        } else {
            todoListItem.classList.remove("marcado");
            copy.remove()
        }
    })
}
