import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			colors: {
				primary: {
					orange: 'hsl(26, 100%, 55%)',
					paleOrange: 'hsl(25, 100%, 94%)'
				},
				neutral: {
					veryDarkBlue: 'hsl(220, 13%, 13%)',
					darkGrayishBlue: 'hsl(219, 9%, 45%)',
					grayishBlue: 'hsl(220, 14%, 75%)',
					lightGrayishBlue: 'hsl(223, 64%, 98%)',
					white: 'hsl(0, 0%, 100%)'
				},
				shade: {
					black: 'hsla(0, 0%, 0%, 0.75)'
				}
			},
			fontFamily: {
				sans: ['var(--font-kumbh-sans)']
			}
		}
	},
	plugins: []
};
export default config;
