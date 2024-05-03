import editBtnHandler from '../handlers/editBtnHandler.js';
import deleteBtnHandler from '../handlers/deleteBtnHandler.js';

const createTodo = (item) => {
    //create items
    const container = document.createElement('div');
    container.classList.add('todo-item');
    container.id = item.id;

    //create title
    const title = document.createElement('p');
    title.classList.add('title');
    title.innerText = item.text;

    //create btn container
    const btnContainer = document.createElement('div');
    btnContainer.classList.add('btn-container');

    //create edit btn
    const editBtn = document.createElement('button');
    editBtn.classList.add('edit-btn');
    editBtn.innerText = 'EDIT';

    editBtn.addEventListener('click', () => {
        editBtnHandler();
    });

    //create delete btn
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.innerText = 'DELETE';

    deleteBtn.addEventListener('click', () => {
        deleteBtnHandler();
    });

    btnContainer.append(editBtn, deleteBtn);
    container.append(title, btnContainer);

    return container;
};

export default createTodo;
