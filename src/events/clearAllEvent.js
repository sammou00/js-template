import dom from '../dom.js';
import clearAllHandler from '../handlers/clearAllHandler.js';

const clearAllEvent = () => {
    dom.clearAllBtn.addEventListener('click', clearAllHandler);
};

export default clearAllEvent;
