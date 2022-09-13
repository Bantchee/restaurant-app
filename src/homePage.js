export const homePage = () => {
    const state = {
        content: document.querySelector('#content'),
    };

    const render = () => {
        slideShow();
        // Div : Slide Show Container
            // Div : Slide Container
                // Div: Slides
            // Div : Dot Container
                // Span : Dots
    };

    const slideShow = () => {
        // Div : Slide Show Container
        const divSlideShow = document.createElement('div');
        state.content.appendChild(divSlideShow);
        state['slideShow'] = divSlideShow;
        divSlideShow.classList.add('slide-show');

        slideContainer();
        dotContainer();
    };

    const slideContainer = () => {
        // Div : Slide Container
        const divSlideContainer = document.createElement('div');
        state.slideShow.appendChild(divSlideContainer);
        state['slideContainer'] = divSlideContainer;
        divSlideContainer.classList.add('slide-container');

            // Slide 1

            // Slide 2

            // Slide 3
    };

    const slide = (num, url) => {
        const divSlide = document.createElement('div');
        
    };

    const dotContainer = () => {
        // Div : Slide Container
        const divDotContainer = document.createElement('div');
        state.slideShow.appendChild(divDotContainer);
        state['dotContainer'] = divDotContainer;
        divDotContainer.classList.add('dot-container');
    };

    return Object.assign({}, 
        state, 
        {render});
};