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
        const pizzaItem = document.querySelector('.pizza');
        const friesItem = document.querySelector('.fries');
        const drinksItem = document.querySelector('.drinks');
        const iceCreamItem = document.querySelector('.ice-cream');

        // Bindings
        burgerItem.addEventListener('click', () => {
            changeModal('burger');
            state.modal.style.display = 'flex';
            exitBinding();
        });
        pizzaItem.addEventListener('click', () => {
            changeModal('pizza');
            state.modal.style.display = 'flex';
            exitBinding();
        });
        friesItem.addEventListener('click', () => {
            changeModal('fries');
            state.modal.style.display = 'flex';
            exitBinding();
        });
        drinksItem.addEventListener('click', () => {
            changeModal('drinks');
            state.modal.style.display = 'flex';
            exitBinding();
        });
        iceCreamItem.addEventListener('click', () => {
            changeModal('ice-cream');
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

        // Exit
        const exitDiv = document.createElement('div');
        modalContent.appendChild(exitDiv);
        exitDiv.classList.add('exit-div');
            // Exit Text
            const exit = document.createElement('span');
            exitDiv.appendChild(exit);
            exit.classList.add('exit');
            exit.textContent = 'X';

            // Switch (type)
            switch(type) {
                case 'burger':
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
                break;
                case 'pizza':
                    // Sizes
                    const pizzaSizesTitle = document.createElement('p');
                    modalContent.appendChild(pizzaSizesTitle);
                    pizzaSizesTitle.textContent = "Pizza Sizes :"
                    pizzaSizesTitle.classList.add('title');
                        // Ul
                        const pizzSizeList = document.createElement('ul');
                        modalContent.appendChild(pizzSizeList);
                            // Small $5
                            const smallPizzaSize = document.createElement('li');
                            pizzSizeList.appendChild(smallPizzaSize);
                            smallPizzaSize.textContent = "Small $10";
                            // Medium $10
                            const mediumPizzaSize = document.createElement('li');
                            pizzSizeList.appendChild(mediumPizzaSize);
                            mediumPizzaSize.textContent = "Medium $15";
                            // Large $15
                            const largePizzaSize = document.createElement('li');
                            pizzSizeList.appendChild(largePizzaSize);
                            largePizzaSize.textContent = "Large $20";
            break;
            case 'fries' :
                // Sizes
                const friesSizesTitle = document.createElement('p');
                modalContent.appendChild(friesSizesTitle);
                friesSizesTitle.textContent = "Fries Sizes :"
                friesSizesTitle.classList.add('title');
                    // Ul
                    const friesSizeList = document.createElement('ul');
                    modalContent.appendChild(friesSizeList);
                        // Small $5
                        const smallFriesSize = document.createElement('li');
                        friesSizeList.appendChild(smallFriesSize);
                        smallFriesSize.textContent = "Small $1";
                        // Medium $10
                        const mediumFriesSize = document.createElement('li');
                        friesSizeList.appendChild(mediumFriesSize);
                        mediumFriesSize.textContent = "Medium $3";
                        // Large $15
                        const largeFriesSize = document.createElement('li');
                        friesSizeList.appendChild(largeFriesSize);
                        largeFriesSize.textContent = "Large $5";
            break;
            case 'drinks' :
                // Sizes
                const drinkSizesTitle = document.createElement('p');
                modalContent.appendChild(drinkSizesTitle);
                drinkSizesTitle.textContent = "Drink Sizes :"
                drinkSizesTitle.classList.add('title');
                    // Ul
                    const drinkSizeList = document.createElement('ul');
                    modalContent.appendChild(drinkSizeList);
                        // Small $5
                        const smallDrinkSize = document.createElement('li');
                        drinkSizeList.appendChild(smallDrinkSize);
                        smallDrinkSize.textContent = "Small $1";
                        // Medium $10
                        const mediumDrinkSize = document.createElement('li');
                        drinkSizeList.appendChild(mediumDrinkSize);
                        mediumDrinkSize.textContent = "Medium $3";
                        // Large $15
                        const largeDrinkSize = document.createElement('li');
                        drinkSizeList.appendChild(largeDrinkSize);
                        largeDrinkSize.textContent = "Large $5";
            break;
            case 'ice-cream' : 
            // flavors
            const iceCreamFlavorsTitle = document.createElement('p');
            modalContent.appendChild(iceCreamFlavorsTitle);
            iceCreamFlavorsTitle.textContent = "Ice Cream Flavors :"
            iceCreamFlavorsTitle.classList.add('title');
                // Ul
                const iceCreamFlavorsList = document.createElement('ul');
                modalContent.appendChild(iceCreamFlavorsList);
                    // vanilla
                    const vanilla = document.createElement('li');
                    iceCreamFlavorsList.appendChild(vanilla);
                    vanilla.textContent = "Vanilla $3";
                    // chocolate
                    const chocolate = document.createElement('li');
                    iceCreamFlavorsList.appendChild(chocolate);
                    chocolate.textContent = "Chocolate $3";
                    // strawberry
                    const strawberry = document.createElement('li');
                    iceCreamFlavorsList.appendChild(strawberry);
                    strawberry.textContent = "Strawberry $3";
            break;  
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