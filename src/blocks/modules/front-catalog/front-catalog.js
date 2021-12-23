(function () {
    document.addEventListener('DOMContentLoaded', () => {
        let catologCard = document.querySelectorAll('[data-catalog]');

        for (let i = 0; i < catologCard.length; i++) {
            catologCard[i].addEventListener('mouseover', () => {
                catologCard[i].classList.add('front-catalog__item--active');

            });
            catologCard[i].addEventListener('mouseout', () => {
                catologCard[i].classList.remove('front-catalog__item--active');

            });
        };
    });
})();