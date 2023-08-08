/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				"figtree-normal": ['Figtree-normal', 'ui-sans-serif', 'system-ui'],
				"figtree-semibold": ['Figtree-semibold', 'ui-sans-serif', 'system-ui'],
			},
		},
	},
	plugins: [],
}
