import burgerPlateImg from './img/small-burger-plate.jpg';

export const loadBasePage = () => {
    // Body
    const body = document.body;
    body.style.backgroundImage = `url(${burgerPlateImg})`;
        // Div : Background tint
        const divBackgroundTint = document.createElement('div');
        divBackgroundTint.setAttribute('id', 'background-tint');
        body.appendChild(divBackgroundTint);
    
    // Header
    const header = document.createElement('header');
    body.appendChild(header);

        // Title
        const title = document.createElement('h1');
        header.appendChild(title);
        title.classList.add('title');
        title.textContent = "Spring's Clover";

        // Nav
        const navbar = document.createElement('nav');
        header.appendChild(navbar);
            // a : Home
            const homeLink = document.createElement('a');
            navbar.appendChild(homeLink);
            homeLink.classList.add('nav-link', 'current-page');
            homeLink.setAttribute('href', '');
            homeLink.textContent = 'Home';

            // a : Menu
            const menuLink = document.createElement('a');
            navbar.appendChild(menuLink);
            menuLink.classList.add('nav-link');
            menuLink.setAttribute('href', '');
            menuLink.textContent = 'Menu';

            // a : About
            const aboutLink = document.createElement('a');
            navbar.appendChild(aboutLink);
            aboutLink.classList.add('nav-link');
            aboutLink.setAttribute('href', '');
            aboutLink.textContent = 'About';

            // a : Contact
            const contactLink = document.createElement('a');
            navbar.appendChild(contactLink);
            contactLink.classList.add('nav-link');
            contactLink.setAttribute('href', '');
            contactLink.textContent = 'Contact';

    // Div : Content
    const content = document.createElement('div');
    content.setAttribute('id', 'content');
    body.appendChild(content);

    // Footer
    const footer = document.createElement('footer');
    body.appendChild(footer);
};