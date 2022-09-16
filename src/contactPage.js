export const contactPage = () => {
    const state = {
        content: document.querySelector('#content'),
    };

    const render = () => {
        // reset content class list
        state.content.classList = "";

        // add home-page to class list
        state.content.classList.add("contact-page");
        
    };

    return Object.assign(
        {},
        state,
        {render});
};