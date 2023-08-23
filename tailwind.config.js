/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {},
			fontFamily: {
				SFProDisplayBold: 'SFProDisplayBold',
				SFProDisplaySemiBold: 'SFProDisplaySemiBold',
				SFProDisplyMedium: 'SFProDisplyMedium',
				SFProDisaplayRegular: 'SFProDisaplayRegular',
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
}
