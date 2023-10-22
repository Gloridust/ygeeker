import { Link } from "nextra-theme-docs";
import React from "react";

export default function Footer({}) {
	return (
		<section className="mt- flex justify-center">
			<footer className="max-w-[1200px] p-10">
				<div className="flex justify-between">
					<div className="h-full text-center sm:mr-8 md:text-left">
						<h2 className="mb-4 text-2xl font-bold">YGeeker</h2>
						<p>
							We are young team found at Chengdu, China. We build
							amazing stuffs.
						</p>
						<div className="mt-6">{/* Add logo/image here */}</div>
					</div>
					<div className="container mx-auto grid grid-cols-1 gap-0 md:grid-cols-2">
						<div className="flex max-w-xs items-center justify-self-end rounded-lg p-2 hover:bg-white">
							<div className="rounded-full bg-green-700 p-1">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									height="28"
									viewBox="0 -960 960 960"
									width="28"
									className="fill-white"
								>
									<path d="m260-520 220-360 220 360H260ZM700-80q-75 0-127.5-52.5T520-260q0-75 52.5-127.5T700-440q75 0 127.5 52.5T880-260q0 75-52.5 127.5T700-80Zm-580-20v-320h320v320H120Zm580-60q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29Zm-500-20h160v-160H200v160Zm202-420h156l-78-126-78 126Zm78 0ZM360-340Zm340 80Z" />
								</svg>
							</div>
							<div className="ml-3">
								<h3 className="text-xl">Products</h3>
								<p className="text-slate-500">
									Discover handful work and make your life
									easier
								</p>
							</div>
						</div>
						<div className="flex max-w-xs items-center justify-self-end rounded-lg p-2 hover:bg-white">
							<div className="rounded-full bg-green-700 p-1">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									height="28"
									viewBox="0 -960 960 960"
									width="28"
									className="fill-white"
								>
									<path d="m260-520 220-360 220 360H260ZM700-80q-75 0-127.5-52.5T520-260q0-75 52.5-127.5T700-440q75 0 127.5 52.5T880-260q0 75-52.5 127.5T700-80Zm-580-20v-320h320v320H120Zm580-60q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29Zm-500-20h160v-160H200v160Zm202-420h156l-78-126-78 126Zm78 0ZM360-340Zm340 80Z" />
								</svg>
							</div>
							<div className="ml-3">
								<h3 className="text-xl">Products</h3>
								<p className="text-slate-500">
									Discover handful work and make your life
									easier
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="mt-10 flex items-center justify-between space-x-8">
					<img width={36} src="/logo.svg"></img>
					<div className="flex">
						<a
							href="#"
							className="ml-4 text-gray-500 hover:text-gray-700"
						>
							Privacy
						</a>
						<a
							href="#"
							className="ml-4 text-gray-500 hover:text-gray-700"
						>
							Term of Use
						</a>
					</div>
				</div>
			</footer>
		</section>
	);
}
