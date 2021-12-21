(function () {
    document.addEventListener('DOMContentLoaded', () => {
        let card = document.querySelectorAll('[data-card]');

        for (let i = 0; i < card.length; i++) {
            card[i].addEventListener('mouseover', () => {
                card[i].classList.add('popular-cards__card--active');

            });
            card[i].addEventListener('mouseout', () => {
                card[i].classList.remove('popular-cards__card--active');

            });
        };
    });
})();