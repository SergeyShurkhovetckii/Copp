(function () {
    document.addEventListener('DOMContentLoaded', () => {
        let card = document.querySelectorAll('[data-card]');
        let name = document.querySelectorAll('[data-name]');

        for (let i = 0; i < card.length && i < name.length; i++) {
            card[i].addEventListener('mouseover', () => {
                card[i].classList.add('popular-cards__card--active');
                name[i].classList.add('title--white');

                console.log(card[i]);
            });
            card[i].addEventListener('mouseout', () => {
                card[i].classList.remove('popular-cards__card--active');
                name[i].classList.remove('title--white');

            });
        };
    });
})();