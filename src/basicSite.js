import pizzaImg from './img/pizza.jpg';

export const load = () => {
    // Div : #content
    const content = document.getElementById('content');

    // H1 : Restaurant
    const header = document.createElement('h1');
    header.textContent = "Restaurant";
    content.appendChild(header);

    // Img
    const img = document.createElement('img');
    img.setAttribute('alt', 'Pizza Image');
    img.setAttribute('src', pizzaImg);
    content.appendChild(img);

    // P : 'Copy text'
    const para = document.createElement('p');
    para.textContent = "Welcome to Tommy's pizza hut! Home to the best pizza in the world! Come on in and try it. Its only $2 for a slice!";
    content.appendChild(para); 
};