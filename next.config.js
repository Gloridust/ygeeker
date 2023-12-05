const withNextra = require("nextra")({
	theme: "./theme.tsx",
});

module.exports = withNextra({
	i18n: {
		locales: ["en-US", "zh-CN"],
		defaultLocale: "en-US",
		domains: [
			{
				domain: "www.ygeeker.com.cn",
				defaultLocale: "zh-CN",
			},
		],
	},
});
