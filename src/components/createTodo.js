import editBtnHandler from '../handlers/editBtnHandler.js';
import deleteBtnHandler from '../handlers/deleteBtnHandler.js';

/**
 * Creation of todo element with title, edit button and delete button.
 *
 * @param {object} item - The todo item object containing id and text
 * @param {string} item.id - The unique id of the todo item.
 * @param {string} item.text - The text content of the todo item.
 * @returns {HTMLElement} - The created todo item element.
 */

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
        editBtnHandler(item);
    });

    //create delete btn
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.innerText = 'DELETE';

    deleteBtn.addEventListener('click', () => {
        deleteBtnHandler(item.id);
    });

    btnContainer.append(editBtn, deleteBtn);
    container.append(title, btnContainer);

    return container;
};

export default createTodo;
