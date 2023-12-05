// adapt-for-china-site.js
const fs = require("fs");
const path = require("path");
const defaultConfig = require("./default-config");

const chinaConfig = {
	...defaultConfig,
	i18n: {
		locales: ["zh-CN"],
		defaultLocale: "zh-CN",
	},
	ƒ,
};

const configFileContent = `const withNextra = require("nextra")({
  theme: "./theme.tsx",
});

module.exports = withNextra(${JSON.stringify(chinaConfig, null, 2)});
`;

fs.writeFileSync(path.join(__dirname, "next.config.js"), configFileContent);
