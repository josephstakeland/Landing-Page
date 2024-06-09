/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			screens: {
				sm: '388px',
				md: '768px',
				lg: '976px',
				xl: '1440px',
			},
			colors: {
				'color-text': '#000614',
				'color-hover': '#14171D',
				'link': '#321ABE',
				'secondary': '#FF895F',
				'third': '#E9EFF5',
				'shape': '#DEE8EF'
			},
			fontFamily: { 
				'font-family': ["Mulish", 'sans-serif'],
            } 
		},
	},
	plugins: [],
}
