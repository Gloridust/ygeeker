import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default {
	navbar: {
		"en-US": {
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
		"zh-CN": {
			component: Navbar,
			items: [
				{
					name: "产品",
					route: "/products",
				},
				{
					name: "新闻",
					route: "/blog",
				},
				{
					name: "账户",
					route: "/account",
				},
				{
					name: "支持",
					route: "/support",
				},
			],
		},
	},
	footer: {
		"en-US": {
			component: Footer,
			text: "We are young team found at Chengdu, China. We build amazing stuffs.",
			actions: [
				{
					title: "About",
					description: "Discover our value and get media materials.",
					color: "bg-green-700",
					href: "/about",
					icon: (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							height="28"
							viewBox="0 -960 960 960"
							width="28"
							className="fill-white"
						>
							<path d="m260-520 220-360 220 360H260ZM700-80q-75 0-127.5-52.5T520-260q0-75 52.5-127.5T700-440q75 0 127.5 52.5T880-260q0 75-52.5 127.5T700-80Zm-580-20v-320h320v320H120Zm580-60q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29Zm-500-20h160v-160H200v160Zm202-420h156l-78-126-78 126Zm78 0ZM360-340Zm340 80Z" />
						</svg>
					),
				},
				{
					title: "Open Source",
					description: "Join our community and build stuff together",
					color: "bg-blue-600",
					href: "https://github.com/ygeeker",
					icon: (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							height="24"
							viewBox="0 -960 960 960"
							className="fill-white"
							width="24"
						>
							<path d="M320-240 80-480l240-240 57 57-184 184 183 183-56 56Zm320 0-57-57 184-184-183-183 56-56 240 240-240 240Z" />
						</svg>
					),
				},
				{
					title: "Join Us",
					description: "Work with us",
					color: "bg-orange-600",
					href: "/join",
					icon: (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="fill-white"
							height="24"
							viewBox="0 -960 960 960"
							width="24"
						>
							<path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
						</svg>
					),
				},
			],
			links: [
				{
					title: "Privacy",
					href: "/legal/privacy",
				},
				{
					title: "Term of Use",
					href: "/legal/terms/sites",
				},
			],
		},
		"zh-CN": {
			component: Footer,
			text: "We are young team found at Chengdu, China. We build amazing stuffs.",
			actions: [
				{
					title: "关于",
					description: "Discover our value and get media materials.",
					color: "bg-green-700",
					href: "/about",
					icon: (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							height="28"
							viewBox="0 -960 960 960"
							width="28"
							className="fill-white"
						>
							<path d="m260-520 220-360 220 360H260ZM700-80q-75 0-127.5-52.5T520-260q0-75 52.5-127.5T700-440q75 0 127.5 52.5T880-260q0 75-52.5 127.5T700-80Zm-580-20v-320h320v320H120Zm580-60q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29Zm-500-20h160v-160H200v160Zm202-420h156l-78-126-78 126Zm78 0ZM360-340Zm340 80Z" />
						</svg>
					),
				},
				{
					title: "开源",
					description: "Join our community and build stuff together",
					color: "bg-blue-600",
					href: "https://github.com/ygeeker",
					icon: (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							height="24"
							viewBox="0 -960 960 960"
							className="fill-white"
							width="24"
						>
							<path d="M320-240 80-480l240-240 57 57-184 184 183 183-56 56Zm320 0-57-57 184-184-183-183 56-56 240 240-240 240Z" />
						</svg>
					),
				},
				{
					title: "加入我们",
					description: "Work with us",
					color: "bg-orange-600",
					href: "/join",
					icon: (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="fill-white"
							height="24"
							viewBox="0 -960 960 960"
							width="24"
						>
							<path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
						</svg>
					),
				},
			],
			links: [
				{
					title: "Privacy",
					href: "/legal/privacy",
				},
				{
					title: "Term of Use",
					href: "/legal/terms/sites",
				},
			],
		},
	},
	// ... other theme options
};
