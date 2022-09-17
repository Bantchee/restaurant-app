import ownerJpg from './img/chef-steve.jpg';
import starSvg from './img/star.svg';

export const aboutPage = () => {
    const state = {
        content: document.querySelector('#content'),
    };

    const render = () => {
        // reset content class list
        state.content.classList = "";

        // add about-page to class list
        state.content.classList.add("about-page");

        // add about content to div#content
        state['ownerElement'] = ownerElement();
        state['ratingElement'] = ratingElement();
        state['ourStoryElement'] = ourStoryElement();
    };

    const ownerElement = () => {
        // Div : Owner Stuff  
        const ownerDiv = document.createElement('div');
        state.content.appendChild(ownerDiv);
        ownerDiv.classList.add('owner-element');
            // Div : Owner Name
            const ownerNameContainer = document.createElement('div');
            ownerDiv.appendChild(ownerNameContainer);
            ownerNameContainer.classList.add('owner-name-container');
                // P : Owner : Steve Cloverfield
                const ownerNamePara = document.createElement('p');
                ownerNameContainer.appendChild(ownerNamePara);
                ownerNamePara.classList.add('owner-name');
                ownerNamePara.textContent = "Owner : Steve Cloverfield"
            // Div : Owner image as background
            const ownerImg = document.createElement('div');
            ownerDiv.appendChild(ownerImg);
            ownerImg.classList.add('owner-img');
            ownerImg.style.backgroundImage = `url(${ownerJpg})`;
        return ownerDiv;
    };

    const ratingElement = () => {
        // Div : Rating
        const ratingDiv = document.createElement('div');
        state.content.appendChild(ratingDiv);
        ratingDiv.classList.add('rating-element');
            // Div : Star Restaurant Container
            const ratingContainer = document.createElement('div');
            ratingDiv.appendChild(ratingContainer);
            ratingContainer.classList.add('rating-container');
                // Div : 5-Stars
                const starsContainer = document.createElement('div');
                ratingContainer.appendChild(starsContainer);
                starsContainer.classList.add('stars-container');
                    // Img * 5 : Star.svg
                    for(let i = 0; i < 5; i++) {
                        const star = document.createElement('img');
                        starsContainer.appendChild(star);
                        star.classList.add('star');
                        star.setAttribute('src', starSvg);
                    }
                // P : Star Restaurant
                const ratingPara = document.createElement('p');
                ratingContainer.appendChild(ratingPara);
                ratingPara.classList.add('star-text');
                ratingPara.textContent = 'Star Restaurant';
            // P : Ratting by the Institute of Food
            const instituePara = document.createElement('p');
            ratingDiv.appendChild(instituePara);
            instituePara.classList.add('star-text');
            instituePara.textContent = 'Rating by the Institute of Food';

        return ratingDiv;
    };

    const ourStoryElement = () => {
        // Div : Ourt Story
        const ourStoryDiv = document.createElement('div');
        state.content.appendChild(ourStoryDiv);
        ourStoryDiv.classList.add('our-story-element');
            // P.title : Our Story :
            const ourStoryTitle = document.createElement('p');
            ourStoryDiv.appendChild(ourStoryTitle);
            ourStoryTitle.classList.add('our-story-title');
            ourStoryTitle.textContent = 'Our Story : ';
            // P : 'Story Copy'
            const ourStoryPara = document.createElement('p');
            ourStoryDiv.appendChild(ourStoryPara);
            ourStoryPara.classList.add('our-story-text');
            ourStoryPara.textContent = 
                `Best ice cream in Reed city Since 1973. 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;
        return ourStoryDiv;
    };

    return Object.assign(
        {},
        state,
        {render});
};