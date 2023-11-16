/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,jsx,ts,tsx,md,mdx}",
		"./components/**/*.{js,jsx,ts,tsx,md,mdx}",
		"./theme.tsx",

		// Or if using `src` directory:
		"./src/**/*.{js,jsx,ts,tsx,md,mdx}",
		"./theme.config.jsx",
	],
	theme: {
		extend: {
			dropShadow: {
				"3xl": "0 35px 35px rgba(0, 0, 0, 0.25)",
				"4xl": [
					"0 35px 35px rgba(0, 0, 0, 0.25)",
					"0 45px 65px rgba(0, 0, 0, 0.15)",
				],
			},
			fontFamily: {
				sans: ["var(--font-noto-sans-display)"],
				koulen: ["var(--font-koulen)"],
			},
			fontWeight: {
				bold: 700,
			},
		},
	},
	plugins: [],
};
