import type {Config} from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {},
		colors: {
			// Base colors Variables
			black: "#111",
			grey: "#686868",
			white: "#ffffff",
			pureBlack: "#000",
			darkGrey: "#8f8f8f",
			lightGrey: "#f7f7f7",

			// Main colors
			blue: "#2563eb",
			yellow: "#e78f01",
			purple: "#a96df1",
			pinkRed: "#e20031",
			blueDark: "#033dbb",
			yellowDark: "#c47a02",
			pinkPurple: "#9a1a76",
			pinkRedDark: "#a00224",
			flatBlueGrey: "#212535",
			flatBlueGreyDarker: "#15171e",
		},
	},
	plugins: [],
};
export default config;
