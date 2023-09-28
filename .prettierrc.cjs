module.exports = {
	tabWidth: 4,
	bracketSpacing: true,
	useTabs: true,
	plugins: [require.resolve("@trivago/prettier-plugin-sort-imports")],
	importOrder: ["<THIRD_PARTY_MODULES>", "^[./]"],
	importOrderSeparation: true,
};
