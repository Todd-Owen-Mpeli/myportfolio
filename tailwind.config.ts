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
			yellow: "#e78f01",
			purple: "#a96df1",
			pinkRed: "#e20031",
			pinkPurple: "#9a1a76",
			flatBlueGrey: "#212535",
			flatBlueGreyDarker: "#15171e",
		},
	},
	plugins: [],
};
export default config;
