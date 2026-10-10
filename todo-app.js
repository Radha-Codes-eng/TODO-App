let todoList = [
    {
    item: 'Buy Milk',
    dueDate: '10/10.2026'
    },
    {
    item: 'Go to College' ,
    dueDate: '10/10/2026'
    }
  ];
function addTodo() {
    let inputElement = document.querySelector('#todo-input');
    let dateElement = document.querySelector('#todo-date');

    todoList.push({
        item: inputElement.value,
        dueDate: dateElement.value
    });
    inputElement.value = '';
    dateElement.value = '';
    displayItems();
}
function displayItems() {
    let containerElement = document.querySelector('.todo-container');
    let newHtml = '';
    for(let i = 0; i < todoList.length; i++) {
        let { item, dueDate } = todoList[i];
        newHtml += `
        <span>${item}</span>
         <span>${dueDate}</span>
        <button class="btn-delete" onclick="todoList.splice(${i}, 1);
        displayItems();">Delete</button>
        `;
    }
containerElement.innerHTML = newHtml;
}
displayItems();


    