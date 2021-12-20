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