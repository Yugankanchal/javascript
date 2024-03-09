let TodoList = [];
const listItems = document.getElementById('list-items');
function getValue() {
    const inputFeild = document.getElementsByTagName('input');
    let value = inputFeild[0].value;
    inputFeild[0].value = "";
    return value;
}

function deleteTask(taskId) {
    let newTodo = TodoList.filter((task) => task.id != taskId);
    TodoList = newTodo;
    TodoList = [];
    renderList(0);
    console.log(TodoList)
    renderList(0);

}

function addTaskToDom(Todo) {
    const listElement = document.createElement('li');
    listElement.innerHTML = `<i class="fa-regular fa-circle bullet"></i> <span>${Todo.todo}</span> <i class="fa-regular fa-circle-xmark cross"></i>`;
    listElement.setAttribute('id', Todo.id);
    listItems.append(listElement);

}

function renderList(LastIndex) {
    for (let i = LastIndex; i < TodoList.length; i++) {
        addTaskToDom(TodoList[i])
    }
    document.getElementById('Total-todo').innerText = TodoList.length;
}
function addTodo() {
    const todoValue = getValue();
    const task = {
        todo: todoValue,
        id: Date.now().toString(),
        done: false
    }
    if (todoValue != '') {
        TodoList.push(task)
    }
    renderList(TodoList.length - 1);
}

document.addEventListener('keydown', (e) => {
    if (e.keyCode === 13) {
        addTodo();
    }

})

document.addEventListener('click', (e) => {
    if (e.target.className == 'fa-regular fa-circle-xmark cross') {
        const taskId = e.target.parentNode.id;

    } else if (e.target.className == 'fa-regular fa-circle bullet') {
        const taskId = e.target.parentNode.id
        const taskDone = TodoList.filter((task) => task.id === taskId);
        console.log(taskDone[0])
        if (taskDone[0].done == false) {

            taskDone[0].done = true;
            e.target.className = "fa-solid fa-circle bullet"
            return
        } else {
            taskDone[0].done = false;
            e.target.className = "fa-regular fa-circle bullet"
        }
    }

})