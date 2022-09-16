export const menuPage = () => {
    const state = {
        content: document.querySelector('#content'),
    };

    const render = () => {
        // reset content class list
        state.content.classList = "";

        // add home-page to class list
        state.content.classList.add("menu-page");
        
    };

    return Object.assign(
        {},
        state,
        {render});
};