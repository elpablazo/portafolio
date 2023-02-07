/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				based: '#84a59d',
				baseder: "#5b726c",
				light: '#ead4bc',
				lighter: '#eae0d5',
				primary: '#ee6c4d',
				auxiliar: '#e94016'
			},
			fontFamily: {
				sans: 'Montserrat',
				title: 'Aboreto'
			}
		}
	},
	plugins: []
};
