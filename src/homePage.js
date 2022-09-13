export const homePage = () => {
    const state = {
        content: document.querySelector('#content'),
    };

    const render = () => {
        // Para : Cool
        const para = document.createElement('p');
        state.content.appendChild(para);
        para.textContent = 'Cool';
        para.style.color = "red";
    };

    return Object.assign({}, 
        state, 
        {render});
};