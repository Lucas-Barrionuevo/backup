import modalHtml from './render-modal.html?raw';
import './render-modal.css'
let modal, form;

export const showModal =  () => {
    modal?.calssList.remove('hide-modal');
}


export const hideModal =  () => {
    modal?.calssList.add('hide-modal');
    form?.reset();
}
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const renderModal = (element) => {
    if (modal) return;

    modal = document.createElement('div');
    modal.innerHTML =  modalHtml;
    modal.className = 'modal-container hide-modal';
    form = modal.querySelector('form');

    
    modal.addEventListener('click' , (event) => {
        if(event.target.className === 'modal-container') {
            hideModal();
        }
    });

    form.addEventListener('submit' , (event) => {
        event.preventDefault();

        const formData = new FormData(form);
        const userLike = {};

        for (const [ket,value] of formData) {
            if (key === 'balance'){
                userLike[key] = +value;
                continue;
            }

            if (key === 'isActive'){
                userLike[key] = (value === 'on') ? true : false;
                continue;
            }
            userLike[key] =value;
        }
        hideModal();
    });

element.append(modal);
}