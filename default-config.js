// default-config.js
const withNextra = require("nextra")({
	theme: "./theme.tsx",
});

const defaultConfig = {
	i18n: {
		locales: ["en-US", "zh-CN"],
		defaultLocale: "en-US",
	},
};

module.exports = defaultConfig;
