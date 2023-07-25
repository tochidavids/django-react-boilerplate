/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,jsx}"],
	darkMode: "class",
	theme: {
		extend: {},
	},
	plugins: [],
	"tailwind-class-sorter.classRegex": {
		rescript: [
			'className\\w*?=\\w*("[\\s\\S]+?")|className\\w*?=\\w*?\\{([\\s\\S]+?)\\}',
			'"(.+?)"',
		],
	},
};
