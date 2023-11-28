const withNextra = require("nextra")({
	theme: "./theme.tsx",
});

module.exports = withNextra({
	i18n: {
		locales: ["en-US", "zh-CN"],
		defaultLocale: "en-US",
		domains: [
			{
				domain: "ygeeker.com",
				defaultLocale: "en-US",
			},
			{
				domain: "ygeeker.com.cn",
				defaultLocale: "zh-CN",
			},
		],
	},
});

// If you have other Next.js configurations, you can pass them as the parameter:
// module.exports = withNextra({ /* other next.js config */ })
