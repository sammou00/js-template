import data from '../data.js';

const deleteBtnHandler = (id) => {
    // delete item from dom
    const item = document.getElementById(id);
    if (item) {
        item.remove();
    }

    //delete item from data
    data.items = data.items.filter((itemData) => {
        return itemData.id !== id;
    });
    console.log(data.items);
};

export default deleteBtnHandler;
