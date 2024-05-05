import data from '../data.js';
import dom from '../dom.js';

const clearAllHandler = () => {
    //dom
    if (confirm('Are you sure you want to clear all the items?')) {
        dom.itemsList.innerHTML = '';
        alert('Items cleared successfully');

        //         if (data.items.length === 0) {
        //             dom.itemsList.innerHTML = `Now you can rest and watch Netflix

        //         <span class="material-symbols-outlined">
        // coffee
        // </span>`;
        //         }
    } else {
        alert('Clearing cancelled');
    }

    //data
    data.items = [];
};

export default clearAllHandler;
