/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		screens: {
			desktop: '1440px',
			tablet: '768px',
			mobile: '375px',
		},
		colors: {
			black: '#151515',
			darkGrey: '#242424',
			green: '#4EE1A0',
			grey: '#D9D9D9',
			white: '#FFFFFF',
		},
		fontFamily: {
			sans: ['Space Grotesk', 'sans-serif'],
		},
		fontSize: {
			xl: [
				'88px',
				{ lineHeight: '88px', letterSpacing: '-2.5px', fontWeight: 700 },
			],
			l: [
				'48px',
				{ lineHeight: '56px', letterSpacing: '-1.5px', fontWeight: 700 },
			],
			m: ['24px', { lineHeight: '32px', fontWeight: 700 }],
			s: ['18px', { lineHeight: '28px', fontWeight: 700 }],
			xs: ['16px', { lineHeight: '26px', fontWeight: 700 }],
		},
		extend: {},
	},
	plugins: [],
};
