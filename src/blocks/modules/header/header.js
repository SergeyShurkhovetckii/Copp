import Mmenu from 'mmenu-js';

(function () {
	new Mmenu("#menu", {
		"extensions": [
			"pagedim-black",
			"position-front",
			"theme-dark",
		],
		"navbar": {
			"title": "#copp.",
			"sticky": false

		},
		"navbars": [{
			"position": "top",
			"content": [
				"searchfield"
			]
		}]
	});
})();


(function fixedMenuScroll() {
    const header = document.querySelector('.header');
	const logo = document.querySelector('.header__logo');

    if (header&&logo) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 0) {
                header.classList.add('header--fixed');
				logo.classList.add('header__logo--fixed');

            } else {
                header.classList.remove('header--fixed');
				logo.classList.remove('header__logo--fixed');
            }
        })
    }
})();