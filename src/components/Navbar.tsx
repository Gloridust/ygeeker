import { Link } from "nextra-theme-docs";
import React, { useState, useEffect } from "react";

export default function Navbar({ pageMap, subNavbar, autoHide }) {
	const [navbarTop, setNavbarTop] = useState("0");
	const [lastScrollTop, setLastScrollTop] = useState(0);

	useEffect(() => {
		if (autoHide) {
			const handleScroll = () => {
				const currentScrollTop =
					window.pageYOffset || document.documentElement.scrollTop;
				if (currentScrollTop > lastScrollTop) {
					setNavbarTop("-53px"); // Hide the navbar by setting the top to -53px
				} else {
					setNavbarTop("0"); // Show the navbar by setting the top to 0
				}
				setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
			};

			window.addEventListener("scroll", handleScroll);
			return () => window.removeEventListener("scroll", handleScroll);
		}
	}, [lastScrollTop, autoHide]);

	return (
		<>
			<div
				className={`fixed left-0 right-0 top-0 z-10 flex h-[48px] justify-center bg-white ${
					!subNavbar && "shadow-sm"
				} transition-all duration-300`}
				style={{ top: navbarTop }}
			>
				<div className="flex min-w-[976px] items-center justify-between px-8">
					<div>
						<Link href="/">
							<img width={36} src="/logo.svg"></img>
						</Link>
					</div>
					<div className="">
						{pageMap.map((item) => {
							if (item.kind === "MdxPage" && item.route != "/") {
								return (
									<Link
										className="ml-8 text-slate-500 hover:text-black"
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
							className="ml-8 text-slate-500 hover:text-black"
							href="/support"
						>
							Support
						</Link>
					</div>
				</div>
			</div>

			{subNavbar && (
				<div className="sticky top-0 z-20 mt-[48px]">{subNavbar}</div>
			)}
		</>
	);
}
