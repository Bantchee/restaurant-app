import burgerPlateImg from './img/small-burger-plate.jpg';
import instagramSvg from './img/instagram.svg'
import youtubeSvg from './img/youtube.svg'
import twitterSvg from './img/twitter.svg'
import githubSvg from './img/github.svg'

export const loadBasePage = () => {
    // Body
    const body = document.body;
        // Img : Background Image
        const backgroundImg = document.createElement('img');
        body.appendChild(backgroundImg);
        backgroundImg.setAttribute('src', burgerPlateImg);
        backgroundImg.setAttribute('id','background-img');

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
            addressContainer.classList.add('address-container', 'container');
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
            hoursContainer.classList.add('hours-container', 'container');
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

            // Div : Contact
            const contactContainer = document.createElement('div');
            restaurantFooter.appendChild(contactContainer);
            contactContainer.classList.add('contact-container', 'container');
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

            // Div : Newsletter
            const newsletterContainer = document.createElement('div');
            restaurantFooter.appendChild(newsletterContainer);
            newsletterContainer.classList.add('newsletter-container', 'container');
                // Para.title : Newsletter
                const newsletterTitle = document.createElement('p');
                newsletterContainer.appendChild(newsletterTitle);
                newsletterTitle.classList.add('title');
                newsletterTitle.textContent = 'Newsletter';
                // Form
                const subForm = document.createElement('form');
                newsletterContainer.appendChild(subForm);
                    // Label : Email
                    const emailLabel = document.createElement('label');
                    subForm.appendChild(emailLabel);
                    emailLabel.textContent = 'Email : ';
                    emailLabel.classList.add('text');
                    // Input : Email
                    const emailInput = document.createElement('input');
                    subForm.appendChild(emailInput);
                    emailInput.setAttribute('type', 'email');
                    // Btn : Sign Up
                    const submitBtn = document.createElement('button');
                    subForm.appendChild(submitBtn);
                    submitBtn.classList.add('sign-up');
                    submitBtn.textContent = "Sign Up";

            // Div : Social Links
            const socialLinksContainer = document.createElement('div');
            restaurantFooter.appendChild(socialLinksContainer);
            socialLinksContainer.classList.add('social-container', 'container');
                // Btn : Instagram
                const instagramBtn = document.createElement('button');
                socialLinksContainer.appendChild(instagramBtn);
                instagramBtn.classList.add('instagram', 'social');
                    // Img : Instagram
                    const instagramImg = document.createElement('img');
                    instagramBtn.appendChild(instagramImg);
                    instagramImg.setAttribute('src', instagramSvg);

                // Btn : YouTube
                const youtubeBtn = document.createElement('button');
                socialLinksContainer.appendChild(youtubeBtn);
                youtubeBtn.classList.add('youtube', 'social');
                    // Img : YouTube
                    const youtubeImg = document.createElement('img');
                    youtubeBtn.appendChild(youtubeImg);
                    youtubeImg.setAttribute('src', youtubeSvg);

                // Btn : Twitter
                const twitterBtn = document.createElement('button');
                socialLinksContainer.appendChild(twitterBtn);
                twitterBtn.classList.add('twitter', 'social');
                    // Img : Twitter
                    const twitterImg = document.createElement('img');
                    twitterBtn.appendChild(twitterImg);
                    twitterImg.setAttribute('src', twitterSvg);
                    
        // Div : Github Footer
        const gitHubFooter = document.createElement('div');
        footer.appendChild(gitHubFooter);
        gitHubFooter.classList.add('github-footer');
            // Para : Copy Right Jar'Zeno Jarret
            const text = document.createElement('p');
            gitHubFooter.appendChild(text);
            text.classList.add('text');
            text.innerHTML = "&#169; Jar'Zeno Jarrett"
            // Btn : GitHub
            const githubBtn = document.createElement('button');
            gitHubFooter.appendChild(githubBtn);
            githubBtn.classList.add('github', 'social');
                // Img : GitHub
                const githubImg = document.createElement('img');
                githubBtn.appendChild(githubImg);
                githubImg.setAttribute('src', githubSvg);
};