// next.config.js
const defaultConfig = require("./default-config");
const withNextra = require("nextra")({
	theme: "./theme.tsx",
});

module.exports = withNextra(defaultConfig);
