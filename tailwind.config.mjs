/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {

			keyframes: {
                "fade-in": {
                    "0%": {
                        opacity: 0
                    },
                    "100%": {
                        opacity: 1
                    },
                },

				'tada': {
                    "0%": {
                        transform: "scale3d(1, 1, 1)",
                    },
                    "10%, 20%": {
                        transform: "scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)",
                    },
                    "30%, 50%, 70%, 90%": {
                        transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)",
                    },
                    "40%, 60%, 80%": {
                        transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)",
                    },
                    "100%": {
                        transform: "scale3d(1, 1, 1)",
                    },
				},

				"drop-in": {
                    "0%": {
                        opacity: "0",
                        transform: "scale(0)",
                        animationTimingFunction: "cubic-bezier(0.34, 1.61, 0.7, 1)",
                    },
                    "100%": {
                        opacity: "1",
                        transform: "scale(1)",
                    },
                },

                "movebounce": {
                    "0%,100%": {
                        transform: "translateY(0)",
                    },
                
                    "50%": {
                        transform: "translateY(20px)",
                    },
                }
	
			},

			animation: {
				"fade-in": "fade-in 1.5s ease-in-out infinite",
				'tada': 'tada 1s ease-in-out',
				'drop-in': 'drop-in 1s ease-in-out 0.25s 1',
				'spin-slow': 'spin 20s linear infinite',
				'bounce-slow': 'bounce 5s linear infinite',
                'movebounce': 'bounce 5s linear infinite',
			},

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


