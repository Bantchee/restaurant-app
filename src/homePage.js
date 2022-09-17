import burgerImg from './img/burger.jpg';
import pizzaImg from './img/pizza.jpg';
import iceCreamImg from './img/ice-cream.jpg';

export const homePage = () => {
    const state = {
        content: document.querySelector('#content'),
        slideIndex: 1,
    };

    // render home page elements to div#contents
    const render = () => {
        // reset content class list
        state.content.classList = "";

        // add home-page to class list
        state.content.classList.add("home-page");

        slideShow();
        bindings();
    };

    // Add events to home page elements
    const bindings = () => {
        // Get Slide Arrows
        const nextArrow = document.getElementsByClassName('next')[0];
        const prevArrow = document.getElementsByClassName('prev')[0];
        
        // Bind functionality to Slide Arrows
        nextArrow.addEventListener('click', () => {
            plusSlides(1);
        }); 
        prevArrow.addEventListener('click', () => {
            plusSlides(-1);
        }); 

        // Get Dots
        const dots = document.getElementsByClassName('dot');
        
        // Bind for dots
        for(let i = 0; i < dots.length; i++) {
            dots[i].addEventListener('click',() => {
                currentSlide(i + 1);
            });
        };
    };

    // add slideShow element to div#content
    const slideShow = () => {
        // Div : Slide Show Container
        const divSlideShow = document.createElement('div');
        state.content.appendChild(divSlideShow);
        state['slideShow'] = divSlideShow;
        divSlideShow.classList.add('slide-show');

        slideContainer();
        dotContainer();

        showSlides(state.slideIndex);
    };

    // add slideContainer element to slideshow element
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

            // Prev Arrow 
            const prevArrow = document.createElement('a');
            divSlideContainer.appendChild(prevArrow);
            state['prevArrow'] = prevArrow;
            prevArrow.classList.add('arrow', 'prev');
            prevArrow.innerHTML = '&#10094;';

            // Next Arrow
            const nextArrow = document.createElement('a');
            divSlideContainer.appendChild(nextArrow);
            state['nextArrow'] = nextArrow;
            nextArrow.classList.add('arrow', 'next');
            nextArrow.innerHTML = '&#10095;';
    };

    // add slide element to slideContainer element
    const slide = (num, imgUrl) => {
        // Div : Slide
        const divSlide = document.createElement('div');
        state.slideContainer.appendChild(divSlide);
        divSlide.classList.add('slide', `slide${num}`);
        divSlide.style.backgroundImage = `url(${imgUrl})`;
    };

    // add dotContainer element to slideShow element
    const dotContainer = () => {
        // Div : Dot Container
        const divDotContainer = document.createElement('div');
        state.slideShow.appendChild(divDotContainer);
        state['dotContainer'] = divDotContainer;
        divDotContainer.classList.add('dot-container');

        dot(1);
        dot(2);
        dot(3);
    };

    // add dot element to dotContainer element
    const dot = (num) => {
        // Span : Dot
        const spanDot = document.createElement('span');
        state.dotContainer.appendChild(spanDot);
        spanDot.classList.add('dot', `dot-${num}`);
    };

    // Next & Previous arrow controls
    const plusSlides = (n) => {
        showSlides(state.slideIndex += n);
    }

    // Thumbnail image controls
    const currentSlide = (n) => {
        showSlides(state.slideIndex = n)
    }

    // Home page slide show functionality, display to screen
    const showSlides = (n) => {
        let i;
        let slides = document.getElementsByClassName('slide');
        let dots = document.getElementsByClassName('dot');
        if (n > slides.length) {state.slideIndex = 1};
        if (n < 1) {state.slideIndex = slides.length};
        for(i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].classList.remove("active");
        }
        slides[state.slideIndex-1].style.display = "block";
        dots[state.slideIndex-1].classList.add("active");
    }

    return Object.assign(
        {}, 
        state, 
        {render});
};