import mapImg from './img/map.jpg';

export const contactPage = () => {
    const state = {
        content: document.querySelector('#content'),
    };

    const render = () => {
        // reset content class list
        state.content.classList = "";

        // add contact-page to class list
        state.content.classList.add("contact-page");

    // Div#contact
        // Div Hours
        const divHours = document.createElement('div');
        state.content.appendChild(divHours);
        divHours.classList.add('hours-div');
            // P : Title
            const paraHoursTitle = document.createElement('p');
            divHours.appendChild(paraHoursTitle);
            paraHoursTitle.classList.add('title');
            paraHoursTitle.textContent = "Hours";
            // Ul
            const hoursList = document.createElement('ul');
            divHours.appendChild(hoursList);
                // Li : Mon - Fri : 8AM - 8PM
                const hourItem1 = document.createElement('li');
                hoursList.appendChild(hourItem1);
                hourItem1.textContent = "Mon-Fri : 8AM-8PM";
                // Li : Sun - Sat : 8AM - 4PM
                const hourItem2 = document.createElement('li');
                hoursList.appendChild(hourItem2);
                hourItem2.textContent = "Sun-Sat : 8AM-4PM";
        // Div Container
        const divContainer = document.createElement('div');
        state.content.appendChild(divContainer);
        divContainer.classList.add('container');
            // Div Address
            const divAddress = document.createElement('div');
            divContainer.appendChild(divAddress);
            divAddress.classList.add('address-div');
                // P : Title
                const paraAddressTitle = document.createElement('p');
                divAddress.appendChild(paraAddressTitle);
                paraAddressTitle.classList.add('title');
                paraAddressTitle.textContent = "Address";
                // P : Text
                const paraAddressText = document.createElement('p');
                divAddress.appendChild(paraAddressText);
                paraAddressText.classList.add('text');
                paraAddressText.textContent = "420 Greendale Lane, Reed City";
                // Btn : Reservation
                const btnReservation = document.createElement('button');
                divAddress.appendChild(btnReservation);
                btnReservation.textContent = "Reservation";
            // Div Map
            const divMap = document.createElement('div');
            divContainer.appendChild(divMap);
            divMap.classList.add('map');
            divMap.style.backgroundImage = `url(${mapImg})`;
            // Div Contact Us
            const divContact = document.createElement('div');
            divContainer.appendChild(divContact);
            divContact.classList.add('contact-div');
                // P : Title
                const paraContactTitle = document.createElement('p');
                divContact.appendChild(paraContactTitle);
                paraContactTitle.classList.add('title');
                paraContactTitle.textContent = "Contact";
                // Ul
                const contactList = document.createElement('ul');
                divContact.appendChild(contactList);
                    // Li : Mon - Fri : 8AM - 8PM
                    const contactItem1 = document.createElement('li');
                    contactList.appendChild(contactItem1);
                    contactItem1.textContent = "Call : +1 (312) 532 5464";
                    // Li : Sun - Sat : 8AM - 4PM
                    const contactItem2 = document.createElement('li');
                    contactList.appendChild(contactItem2);
                    contactItem2.textContent = "Email : support@springsclover.com";
                // Btn : Contact
                const btnContact = document.createElement('button');
                divContact.appendChild(btnContact);
                btnContact.textContent = "Contact";
    };

    return Object.assign(
        {},
        state,
        {render});
};