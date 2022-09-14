import burgerImg from './img/burger.jpg';
import pizzaImg from './img/pizza.jpg';
import iceCreamImg from './img/ice-cream.jpg';

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
            slide(0, burgerImg);

            // Slide 2
            slide(1, pizzaImg);

            // Slide 3
            slide(2, iceCreamImg);
    };

    const slide = (num, imgUrl) => {
        // Div : Slide
        const divSlide = document.createElement('div');
        state.slideContainer.appendChild(divSlide)
        state[`slide${num}`] = divSlide;
        divSlide.classList.add('slide', `slide${num}`);
        divSlide.style.backgroundImage = `url(${imgUrl})`;
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