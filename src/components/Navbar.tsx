import { Link } from "nextra-theme-docs";
import React from "react";

export default function Navbar({ pageMap }) {
	console.log(pageMap);
	return (
		<div className="fixed left-0 right-0 top-0 z-10 flex h-[53px] justify-center bg-white shadow-sm">
			<div className="flex min-w-[976px] items-center justify-between px-8">
				<div>
					<Link href="/">
						<img width={36} src="./logo.svg"></img>
					</Link>
				</div>
				<div className="">
					{pageMap.map((item) => {
						if (item.kind === "MdxPage" && item.route != "/") {
							return (
								<Link
									className="px-4 text-slate-500 hover:text-black"
									key={item.name}
									href={item.route}
								>
									{item.frontMatter.routeName}
								</Link>
							);
						}
						return null;
					})}
					<Link
						className="px-4 text-slate-500 hover:text-black"
						href="/support"
					>
						Support
					</Link>
				</div>
			</div>
		</div>
	);
}
