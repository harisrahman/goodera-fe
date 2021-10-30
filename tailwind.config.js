module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			flex: {
				2: "2 2 0%",
				5: "5 5 0%",
			},
		},
	},

	variants: {
		extend: {},
	},
	plugins: [],
};
