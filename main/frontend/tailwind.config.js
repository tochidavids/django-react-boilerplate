/** @type {import('tailwindcss').Config} */
export default {
	mode: "jit",
	content: ["./*.html", "./src/**/*.{js,jsx}", "./src/**/**/*.{js,jsx}"],
	darkMode: "class",
	theme: {
		colors: {
			text: {
				light: "#172B4D",
				dark: "#B6C2CF",
			},
			lime: {
				light: "#4C6B1F",
				dark: "#B3DF72",
			},
			"lime-bolder": {
				light: "#37471F",
				dark: "#D3F1A7",
			},
			red: {
				light: "#AE2A19",
				dark: "#FF9C8F",
			},
			"red-bolder": {
				light: "#601E16",
				dark: "#FFD2CC",
			},
			orange: {
				light: "#974F0C",
				dark: "#FEC57B",
			},
			"orange-bolder": {
				light: "#5F3811",
				dark: "#FFE2BD",
			},
			yellow: {
				light: "#7F5F01",
				dark: "#F5CD47",
			},
			"yellow-bolder": {
				light: "#533F04",
				dark: "#F8E6A0",
			},
			green: {
				light: "#216E4E",
				dark: "#7EE2B8",
			},
			"green-bolder": {
				light: "#164B35",
				dark: "#BAF3DB",
			},
			teal: {
				light: "#206B74",
				dark: "#8BDBE5",
			},
			"teal-bolder": {
				light: "#1D474C",
				dark: "#C1F0F5",
			},
			blue: {
				light: "#0055CC",
				dark: "#85B8FF",
			},
			"blue-bolder": {
				light: "#09326C",
				dark: "#CCE0FF",
			},
			purple: {
				light: "#5E4DB2",
				dark: "#B8ACF6",
			},
			"purple-bolder": {
				light: "#352C63",
				dark: "#DFD8FD",
			},
			magenta: {
				light: "#943D73",
				dark: "#F797D2",
			},
			"magenta-bolder": {
				light: "#50253F",
				dark: "#FDD0EC",
			},
			grey: {
				light: "#44546F",
				dark: "#9FADBC",
			},
			"grey-bolder": {
				light: "#091E42",
				dark: "#DEE4EA",
			},
			"text-disabled": {
				light: "#091E424F",
				dark: "#BFDBF847",
			},
			inverse: {
				light: "#FFFFFF",
				dark: "#1D2125",
			},
			brand: {
				light: "#0C66E4",
				dark: "#579DFF",
				hover: "#85B8FF",
			},
			danger: {
				light: "#AE2A19",
				dark: "#FF9C8F",
			},
			warning: {
				light: "#974F0C",
				dark: "#F5CD47",
			},
			"warning-inverse": {
				light: "#172B4D",
				dark: "#1D2125",
			},
			success: {
				light: "#216E4E",
				dark: "#7EE2B8",
			},
			discovery: {
				light: "#5E4DB2",
				dark: "#B8ACF6",
			},
			subtlest: {
				light: "#626F86",
				dark: "#8C9BAB",
			},
			subtle: {
				light: "#44546F",
				dark: "#9FADBC",
			},
			surface: {
				light: "#FFFFFF",
				dark: "#1D2125",
				overlay: {
					light: "#FFFFFF",
					dark: "#282E33",
				},
				raised: {
					light: "#FFFFFF",
					dark: "#22272B",
				},
				sunken: {
					light: "#F7F8F9",
					dark: "#161A1D",
				},
			},
		},
	},
	plugins: [],
};
