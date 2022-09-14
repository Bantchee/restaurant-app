import burgerImg from './img/burger.jpg';
import pizzaImg from './img/pizza.jpg';
import iceCreamImg from './img/ice-cream.jpg';

export const homePage = () => {
    const state = {
        content: document.querySelector('#content'),
        slideIndex: 1,
    };

    const render = () => {
        slideShow();
        // Div : Slide Show Container
            // Div : Slide Container
                // Div: Slides
            // Div : Dot Container
                // Span : Dots
        bindings();
    };

    const bindings = () => {
        // Get Slide Arrows
        const nextArrow = document.getElementsByClassName('next')[0];
        const prevArrow = document.getElementsByClassName('prev')[0];
        
        // Bind functionality to Slide Arrows
        nextArrow.addEventListener('click', () => {
            console.log('nextArrow');
            plusSlides(1);
        }); 
        prevArrow.addEventListener('click', () => {
            console.log('prevArrow');
            plusSlides(-1);
        }); 
    };

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

    // Next & Previous arrow controls
    const plusSlides = (n) => {
        showSlides(state.slideIndex += n);
    }

    // Thumbnail image controls
    const currentSlide = (n) => {
        showSlides(state.slideIndex = n)
    }

    const showSlides = (n) => {
        let i;
        let slides = document.getElementsByClassName('slide');
        // let dots = document.getElementsByClassName('dots');
        if (n > slides.length) {state.slideIndex = 1};
        if (n < 1) {state.slideIndex = slides.length};
        for(i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        // for (i = 0; i < dots.length; i++) {
        //     dots[i].className = dots[i].className.replace(" active", "");
        // }
        slides[state.slideIndex-1].style.display = "block";
        // dots[slideIndex-1].className += " active";
    }

    return Object.assign({}, 
        state, 
        {render});
};