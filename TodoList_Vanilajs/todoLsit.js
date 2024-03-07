let TodoList = [];
function getValue() {
    const inputFeild = document.getElementsByTagName('input');
    let value = inputFeild[0].value;
    inputFeild[0].value = "";
    return value;
}

// function updateList() {
//     const listItems = document.getElementById('list-items');
//     for (let i = 0; i < TodoList.length; i++) {

//     }
// }
function addTodo() {
    if (getValue() != '') {
        TodoList.push(getValue());
        // updateList();
    }
    console.log(TodoList);
}