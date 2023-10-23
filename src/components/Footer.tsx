import Link from "next/link";
import React from "react";

const CUSTOM_LINKS = [
	{
		title: "Products",
		description: "Discover handful work and make your life easier",
		color: "bg-green-700",
		href: "",
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
];

const FOOT_LINKS = [
	{
		title: "Privacy",
		href: "",
	},
	{
		title: "Term of Use",
		href: "",
	},
];

export default function Footer({}) {
	return (
		<section className="mt-2 flex justify-center">
			<footer className="max-w-[1200px] p-10">
				<div className="sm:flex sm:justify-between">
					<div className="h-full sm:mr-8 md:text-left">
						<h2 className="mb-4 text-2xl font-bold">YGeeker</h2>
						<p>
							We are young team found at Chengdu, China. We build
							amazing stuffs.
						</p>
					</div>
					<div className="container mx-auto mt-4 grid-cols-1 gap-2 sm:mt-0 sm:grid md:grid-cols-2">
						{CUSTOM_LINKS.map((link) => (
							<Link href={link.href} key={link.title}>
								<div className="flex cursor-pointer items-center justify-self-end rounded-lg p-2 hover:bg-white sm:max-w-xs">
									<div
										className={`rounded-full ${link.color} p-2`}
									>
										{link.icon}
									</div>
									<div className="ml-3">
										<h3 className="text-xl">
											{link.title}
										</h3>
										<p className="text-slate-500">
											{link.description}
										</p>
									</div>
								</div>
							</Link>
						))}
					</div>
				</div>
				<div className="mt-10 flex items-center justify-between space-x-8">
					<img width={36} src="/logo.svg"></img>
					<div className="flex items-center space-x-2 text-sm text-gray-500">
						{FOOT_LINKS.map((link) => (
							<Link
								key={link.title}
								href={link.href}
								className="ml-4 hover:text-gray-700"
							>
								{link.title}
							</Link>
						))}
						<div className="hidden sm:flex">
							<span className="pr-2">|</span>
							<button>United States</button>
						</div>
					</div>
				</div>
			</footer>
		</section>
	);
}
