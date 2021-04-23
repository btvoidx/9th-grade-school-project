module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'bg-primary': '#cac5bf',
			},
			fontFamily: {
				handwriting: ['handwriting', 'Architects Daughter'],
			},
		},
	},
	plugins: [],
};
