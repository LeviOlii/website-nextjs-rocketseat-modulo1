import type { Config } from "tailwindcss";

module.exports = {
	darkMode: ['class'],
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
		'./src/app/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1200px',
			},
		},
		extend: {

			backgroundImage: {
				'support': "url('/background-support-card.svg')",
				'call-to-action': "url('/background-call_to_action.svg')",
				
			},

			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			colors: {
				blue: {
					100: '#7EA4D7',
					200: '#2C85FC',
					330: '#2266C1',
					400: '#0D284C',
				},

				cyan: {
					100: '#2DEBFC',
					200: '#187D86',
					300: '#0E474C',

				},

				gray: {
					white: '#FFFFFF',
					100: '#E9EAEC',
					200: '#D3D5D9',
					300: '#93979E',
					400: '#20242C',
					500: '#16181D',
					600: '#14161A',
					700: '#101216',
					800: '#0B0C0F'
				}
			},
			fontFamily: {
				inter: ['Inter', 'sans-serif'],
				sans: ['PT Sans Caption', 'sans-serif'],
			},
			fontSize: {
				//Headings - PT Sans Caption
				'heading-hg': ['40px', { lineHeight: '120%', fontWeight: '700' }],
				'heading-xl': ['32px', { lineHeight: '120%', fontWeight: '700' }],
				'heading-lg': ['28px', { lineHeight: '120%', fontWeight: '700' }],
				'heading-md': ['24px', { lineHeight: '120%', fontWeight: '700' }],
				'heading-sm': ['20px', { lineHeight: '120%', fontWeight: '700' }],
				'heading-xs': ['16px', { lineHeight: '120%', fontWeight: '700' }],

				//Body - Inter
				'body-md': ['16px', { lineHeight: '150%', fontWeight: '400px' }],
				'body-sm': ['14px', { lineHeight: '150%', fontWeight: '400px' }],
				'body-xs': ['12px', { lineHeight: '150%', fontWeight: '400px' }],
				'body-tag': ['12px', { lineHeight: '100%', fontWeight: '400px' }],

				//Action - Inter
				'action-md': ['16px', { lineHeight: 'normal', fontWeight: '500' }],
				'action-sm': ['14px', { lineHeight: 'normal', fontWeight: '500' }],


			}
		}
	},
	// eslint-disable-next-line @typescript-eslint/no-require-imports
	plugins: [require("tailwindcss-animate")],
}

