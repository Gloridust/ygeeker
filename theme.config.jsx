import Navbar from "./src/components/Navbar";

export default {
	logo: <span>My Nextra Documentation</span>,
	project: {
		link: "https://github.com/shuding/nextra",
	},
	navbar: {
		component: Navbar,
		items: [
			{
				name: "Product",
				route: "/products",
			},
			{
				name: "News",
				route: "/blog",
			},
			{
				name: "Account",
				route: "/account",
			},
			{
				name: "Support",
				route: "/support",
			},
		],
	},
	footer: {},
	// ... other theme options
};
