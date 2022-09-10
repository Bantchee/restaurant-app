import burgerPlateImg from './img/small-burger-plate.jpg';
import instagramSvg from './img/instagram.svg'
import youtubeSvg from './img/youtube.svg'
import twitterSvg from './img/twitter.svg'

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
        // Div : Restaurant Footer
        const restaurantFooter = document.createElement('div');
        footer.appendChild(restaurantFooter);
        restaurantFooter.classList.add('restaurant');
            // Div : Address
            const addressContainer = document.createElement('div');
            restaurantFooter.appendChild(addressContainer);
            addressContainer.classList.add('address-container');
                // Para.title : Address 
                const addressTitle = document.createElement('p');
                addressContainer.appendChild(addressTitle);
                addressTitle.classList.add('title');
                addressTitle.textContent = "Address";
                // Para : 420 Greendale Lane, Reed City
                const addressText = document.createElement('p');
                addressContainer.appendChild(addressText);
                addressText.classList.add('text');
                addressText.textContent = "420 Greendale Lane, Reed City";

            // Div : Hours
            const hoursContainer = document.createElement('div');
            restaurantFooter.appendChild(hoursContainer);
            hoursContainer.classList.add('hours-container');
                // Para : Hours
                const hoursTitle = document.createElement('p');
                hoursContainer.appendChild(hoursTitle);
                hoursTitle.classList.add('title');
                hoursTitle.textContent = "Hours";
                // ul
                const hoursList = document.createElement('ul');
                hoursContainer.appendChild(hoursList);
                    // li : Mon-Fri : 8AM-8PM
                    const hourListItem1 = document.createElement('li');
                    hoursList.appendChild(hourListItem1);
                    hourListItem1.classList.add('text');
                    hourListItem1.textContent = "Mon-Fri : 8AM-8PM";
                    // li : Sat-Sun : 8AM-4PM
                    const hourListItem2 = document.createElement('li');
                    hoursList.appendChild(hourListItem2);
                    hourListItem2.classList.add('text');
                    hourListItem2.textContent = "Sat-Sun : 8AM-4PM";

            // Div : Social Links
            const socialLinksContainer = document.createElement('div');
            restaurantFooter.appendChild(socialLinksContainer);
            socialLinksContainer.classList.add('social-container');
                // Btn : Instagram
                const instagramBtn = document.createElement('button');
                socialLinksContainer.appendChild(instagramBtn);
                instagramBtn.classList.add('instagram');
                    // Img : Instagram
                    const instagramImg = document.createElement('img');
                    instagramBtn.appendChild(instagramImg);
                    instagramImg.setAttribute('src', instagramSvg);

                // Btn : YouTube
                const youtubeBtn = document.createElement('button');
                socialLinksContainer.appendChild(youtubeBtn);
                youtubeBtn.classList.add('youtube');
                    // Img : YouTube
                    const youtubeImg = document.createElement('img');
                    youtubeBtn.appendChild(youtubeImg);
                    youtubeImg.setAttribute('src', youtubeSvg);

                // Btn : Twitter
                const twitterBtn = document.createElement('button');
                socialLinksContainer.appendChild(twitterBtn);
                twitterBtn.classList.add('twitter');
                    // Img : Twitter
                    const twitterImg = document.createElement('img');
                    twitterBtn.appendChild(twitterImg);
                    twitterImg.setAttribute('src', twitterSvg);

            // Div : Contact
            const contactContainer = document.createElement('div');
            restaurantFooter.appendChild(contactContainer);
            contactContainer.classList.add('contact-container');
                // Para.title : contact
                const contactTitle = document.createElement('para');
                contactContainer.appendChild(contactTitle);
                contactTitle.classList.add('title');
                contactTitle.textContent = "Contact";
                // ul
                const contactList = document.createElement('ul');
                contactContainer.appendChild(contactList);
                    // Call : +1 (312) 532 5464
                    const contactListItem1 = document.createElement('li');
                    contactList.appendChild(contactListItem1);
                    contactListItem1.classList.add('text');
                    contactListItem1.textContent = "Call : +1 (312) 532 5464";
                    // Email : support@springsclover.com
                    const contactListItem2 = document.createElement('li');
                    contactList.appendChild(contactListItem2);
                    contactListItem2.classList.add('text');
                    contactListItem2.textContent = "Email : support@springsclover.com";

            // Div : subscribe
            const subscribeContainer = document.createElement('div');
            restaurantFooter.appendChild(subscribeContainer);
            subscribeContainer.classList.add('subscribe-container');
                // Para.title : Subscribe
                const subscribeTitle = document.createElement('p');
                subscribeContainer.appendChild(subscribeTitle);
                subscribeTitle.classList.add('title');
                subscribeTitle.textContent = 'Subscribe';
                // Form
                const subForm = document.createElement('form');
                subscribeContainer.appendChild(subForm);
                    // Label : Email
                    const emailLabel = document.createElement('label');
                    subForm.appendChild(emailLabel);
                    emailLabel.textContent = 'Email : ';
                    emailLabel.classList.add('text');
                    // Input : Email
                    const emailInput = document.createElement('input');
                    subForm.appendChild(emailInput);
                    emailInput.setAttribute('type', 'email');
                    // Btn : Submit
                    const submitBtn = document.createElement('button');
                    subForm.appendChild(submitBtn);
                    submitBtn.textContent = "Submit";

        // Div : Github Footer
            // Para : Copy Right Jar'Zeno Jarret
            // Img / Link : GitHub
};