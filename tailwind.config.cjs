/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			animation: {
				'spin-slow': 'spin 16s linear infinite'
			},
			fontFamily: {
				'get-schwifty': ['Get-Schwifty', 'display'],
				'open-sans': ['Open Sans', 'sans-serif']
			},
			maxWidth: {
				300: '18.75rem'
			},
			opacity: {
				8: '.08',
				92: '.92'
			},
			scale: {
				103: '1.03'
			}
		},
		colors: {
			transparent: 'transparent',
			black: {
				100: '#181818',
				200: '#131313',
				300: '#101010'
			},
			blue: '#0bafc8',
			white: '#f2f2f2',
			grey: '#c0c0c0',
			red: '#7c0200',
			green: '#00a550'
		},
		fontSize: {
			12: ['.75rem'],
			14: ['.875rem'],
			18: ['1.125rem'],
			20: ['1.25rem'],
			24: ['1.5rem'],
			28: ['1.75rem'],
			32: ['2rem'],
			36: ['2.25rem']
		},
		spacing: {
			0: '0rem',
			2: '0.125rem',
			3: '.1875rem',
			12: '.75rem',
			16: '1rem',
			20: '1.25rem',
			24: '1.5rem',
			28: '1.75rem',
			40: '2.5rem',
			60: '3.75rem',
			200: '12.5rem',
			250: '15.625rem',
			300: '18.75rem',
			400: '25rem',
			full: '100%',
			screen: '100vh'
		},
		screens: {
			sm: '576px',
			md: '768px',
			'<lg': { min: '280px', max: '1023px' },
			lg: '1024px',
			xl: '1280px'
		},
		translate: {
			0: '0rem',
			8: '.5rem',
			'1/2': '50%'
		}
	},
	plugins: [
		({ addComponents, addUtilities, addBase }) => {
			addComponents({
				'.navlink': {
					'@apply text-20 font-semibold uppercase text-white border-y-2 border-transparent hover:border-b-blue navlink-transition lg:text-14 outline-none focus-visible:border-b-blue':
						{}
				}
			});
			addUtilities({
				'.navlist-transition': {
					transition: '.2s ease-out left,'
				},
				'.navlink-transition': {
					transition: '.2s ease-out border-color'
				},
				'.scrollbar-none': {
					scrollbarWidth: 'none',
					'&::-webkit-scrollbar': {
						display: 'none'
					}
				}
			});
			addBase({
				body: {
					'@apply font-open-sans bg-blue text-black-200 antialiased leading-normal': {}
				}
			});
		}
	]
};
