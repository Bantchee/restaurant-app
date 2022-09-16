import burgerImg from './img/burger.jpg';
import pizzaImg from './img/pizza.jpg';
import friesImg from './img/fries.jpg';
import cocktailImg from './img/cocktail.jpg';
import iceCreamImg from './img/ice-cream.jpg';

export const menuPage = () => {
    const state = {
        content: document.querySelector('#content'),
        modal: null,
    };

    const render = () => {
        // reset content class list
        state.content.classList = "";

        // add home-page to class list
        state.content.classList.add("menu-page");

        // Div : Burger
            // Div : Burger Img Background
            // Para : 'Burger'
        createMenuItem('burger', burgerImg);
        // Div : Pizza
            // Div : Burger Img Background
            // Para : 'Burger'
        createMenuItem('pizza', pizzaImg);
        // Div : Fries
            // Div : Burger Img Background
            // Para : 'Burger'
        createMenuItem('fries', friesImg);
        // Div : Drinks
            // Div : Burger Img Background
            // Para : 'Burger'
        createMenuItem('drinks', cocktailImg);
        // Div : Ice Cream
            // Div : Burger Img Background
            // Para : 'Burger'
        createMenuItem('ice cream', iceCreamImg);
        
        // Div : Modal
            // Div : Modal-Background-Tint
            // Div : Modal-Content
        createModal();

        bindings();
    };

    const bindings = () => {
        // Get Menu Items
        const burgerItem = document.querySelector('.burger');

        // Bindings
        burgerItem.addEventListener('click', () => {
            changeModal('burger');
            state.modal.style.display = 'flex';
            exitBinding();
        });
    };

    const exitBinding = () => {
        // Get Menu Modal Exit
        const exit = document.querySelector('.exit');

        //Binding
        exit.addEventListener('click', () => {
            const modalContent = document.querySelector('.menu-modal-content');

            while(modalContent.firstChild) {
                modalContent.removeChild(modalContent.firstChild);
            }

            state.modal.style.display = 'none';
        })
    }

    const createMenuItem = (name, url) => {
        // Div : Item Container
        const divItem = document.createElement('div');
        state.content.appendChild(divItem)
        divItem.classList.add('item-container', (name.includes(" ") ? 'ice-cream' : name));
            // Div : Item Img background
            const ItemImg = document.createElement('div');
            divItem.appendChild(ItemImg);
            ItemImg.classList.add('img');
            ItemImg.style.backgroundImage = `url(${url})`;

            // Para : Item-Name
            const paraItem = document.createElement('p');
            divItem.appendChild(paraItem);
            paraItem.classList.add('text');
            paraItem.textContent = name[0].toUpperCase() + name.slice(1);

    };

    const createModal = () => {
        // Div : Modal
        const divModal = document.createElement('div');
        document.body.appendChild(divModal);
        state.modal = divModal;
        divModal.classList.add('menu-modal');
            // Div : Modal-Content
            const modalContent = document.createElement('div');
            divModal.appendChild(modalContent);
            modalContent.classList.add('menu-modal-content');
    };

    // type is class name of menu item
    const changeModal = (type) => {
        // Get Div : Modal-Content
        const modalContent = state.modal.querySelector('.menu-modal-content');
            // Switch (type)
            switch(type) {
                case 'burger':
                    // Exit
                    const exitDiv = document.createElement('div');
                    modalContent.appendChild(exitDiv);
                    exitDiv.classList.add('exit-div');
                        // Exit Text
                        const exit = document.createElement('span');
                        exitDiv.appendChild(exit);
                        exit.classList.add('exit');
                        exit.textContent = 'X';

                    // Sizes
                    const sizesTitle = document.createElement('p');
                    modalContent.appendChild(sizesTitle);
                    sizesTitle.textContent = "Burger Sizes :"
                    sizesTitle.classList.add('title');
                        // Ul
                        const sizeList = document.createElement('ul');
                        modalContent.appendChild(sizeList);
                            // Small $5
                            const smallSize = document.createElement('li');
                            sizeList.appendChild(smallSize);
                            smallSize.textContent = "Small $5";
                            // Medium $10
                            const mediumSize = document.createElement('li');
                            sizeList.appendChild(mediumSize);
                            mediumSize.textContent = "Medium $10";
                            // Large $15
                            const largeSize = document.createElement('li');
                            sizeList.appendChild(largeSize);
                            largeSize.textContent = "Large $15";
            }
                // Case : burger
                    // Sizes and Prices
                    // List Toppings
                // Case : pizza
                    // Sizes and Prices
                    // List Toppings
                // Case : fries
                    // Sizes and Prices
                    // List Seasonings
                // Case : drinks
                    // Sizes and Prices
                    // List Flavors
                // Case : ice-cream
                    // Sizes and Prices
                    // List Flavors
    };

    return Object.assign(
        {},
        state,
        {render});
};