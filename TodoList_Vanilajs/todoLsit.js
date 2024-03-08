let TodoList = [];
function getValue() {
    const inputFeild = document.getElementsByTagName('input');
    let value = inputFeild[0].value;
    inputFeild[0].value = "";
    return value;
}

function renderList(lastIndex) {
    const listItems = document.getElementById('list-items');
    for (let i = lastIndex; i < TodoList.length; i++) {
        const listElement = document.createElement('li');
        listElement.innerHTML = `<i id="bullet" class="fa-regular fa-circle"></i> <span>${TodoList[i]}</span> <i id="cross" class="fa-regular fa-circle-xmark"></i>`;
        console.log(listElement);
        listItems.append(listElement);
    }
    document.getElementById('Total-todo').innerText = TodoList.length;
}
function addTodo() {
    const todoValue = getValue();
    if (todoValue != '') {
        TodoList.push(todoValue)
    }
    renderList(TodoList.length - 1);
}

document.addEventListener('keydown', (e) => {
    if (e.keyCode === 13) {
        addTodo();
    }

})