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
