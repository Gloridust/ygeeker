import { Link } from "nextra-theme-docs";
import React from "react";

export default function Navbar({}) {
	return (
		<div className="fixed left-0 right-0 top-0 z-10 flex h-[60px] justify-center py-1">
			<div className="flex min-w-[996px] items-center justify-between rounded-lg bg-white px-8 py-1 shadow-lg">
				<div>
					<Link href="/">
						<img width={36} src="./logo.svg"></img>
					</Link>
				</div>
				<div className="">
					<Link className="mr-2" href="/support">
						Support
					</Link>
					<Link href="/support">Join</Link>
				</div>
			</div>
		</div>
	);
}
