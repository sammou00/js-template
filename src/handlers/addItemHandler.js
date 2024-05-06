import data from '../data.js';
import dom from '../dom.js';

import createTodo from '../components/createTodo.js';

const addItemHandler = (e) => {
    e.preventDefault();

    const value = dom.input.value.trim();
    const btnType = dom.submitBtn.innerText;

    if (btnType === 'Submit') {
        if (!value) {
            dom.error.innerText = 'Input cannot be empty';
            dom.error.classList.add('error-css');
            setTimeout(() => {
                dom.error.innerText = '';
                dom.error.classList.remove('error-css');
            }, 2000);
        } else {
            // Check if class coffee exists
            const coffeeExist = document.getElementById('coffee');
            if (coffeeExist) coffeeExist.remove();

            //new item - data
            const newItem = {
                id: data.items.length + 1,
                text: value,
            };

            //new item - dom
            const newItemDom = createTodo(newItem);
            // newItemDom.classList.add('error-css');

            data.items.push(newItem);

            dom.itemsList.prepend(newItemDom);
            dom.input.value = '';
        }
    } else {
        // modify dom
        const selectedItem = document.querySelector('.selected');
        selectedItem.querySelector('.title').innerText = value;
        const id = Number(selectedItem.id);

        //modify data
        const itemData = data.items.find((item) => {
            return item.id === id;
        });
        itemData.text = value;
        dom.input.value = '';
        dom.submitBtn.innerText = 'Submit';
        selectedItem.classList.remove('selected');
    }
};

export default addItemHandler;
