import data from '../data.js';
import dom from '../dom.js';

const clearAllHandler = () => {
    //dom
    if (confirm('Are you sure you want to clear all the items?')) {
        //data
        data.items = [];
        dom.itemsList.innerHTML = '';
        alert('Items cleared successfully');

        if (data.items.length === 0) {
            dom.itemsList.innerHTML = `<p id="coffee">Now you can rest and watch Netflix

                <span class="material-symbols-outlined">
        coffee
        </span></p>`;
        }
    } else {
        alert('Clearing cancelled');
    }
};

export default clearAllHandler;
