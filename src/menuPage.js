import burgerImg from './img/burger.jpg';
import pizzaImg from './img/pizza.jpg';
import friesImg from './img/fries.jpg';
import cocktailImg from './img/cocktail.jpg';
import iceCreamImg from './img/ice-cream.jpg';

export const menuPage = () => {
    const state = {
        content: document.querySelector('#content'),
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
        
    };

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

    return Object.assign(
        {},
        state,
        {render});
};