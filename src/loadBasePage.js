import burgerPlateImg from './img/burger-plate.jpg';

export const loadBasePage = () => {
    // Body
    const body = document.body;
    body.style.backgroundImage = `url(${burgerPlateImg})`;
    
    // Header
    const header = document.createElement('header');
    document.body.appendChild(header);

        // Title

        // Nav
            // Home
            // Menu
            // About
            // Contact

    // Div : Content
    const content = document.createElement('div');
    content.setAttribute('id', 'content');
    document.body.appendChild(content);

    // Footer
    const footer = document.createElement('footer');
    document.body.appendChild(footer);
};