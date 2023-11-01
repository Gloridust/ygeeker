import themeConfig from "@/theme.config";
import { useRouter } from "next/router";
import { Link } from "nextra-theme-docs";
import React, { useState, useEffect } from "react";

export default function Navbar({
	pageMap,
	subNavbar,
	autoHide,
	navMap,
}: {
	subNavbar?: any;
	autoHide?: boolean;
	pageMap?: any[];
	navMap?: any[];
}) {
	const [navbarTop, setNavbarTop] = useState("0");
	const [lastScrollTop, setLastScrollTop] = useState(0);
	const [isMenuOpen, setMenuOpen] = useState(false);
	const { locale } = useRouter();

	useEffect(() => {
		if (autoHide) {
			const handleScroll = () => {
				const currentScrollTop =
					window.pageYOffset || document.documentElement.scrollTop;
				if (currentScrollTop > lastScrollTop) {
					setNavbarTop("-53px");
				} else {
					setNavbarTop("0");
				}
				setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
			};

			window.addEventListener("scroll", handleScroll);
			return () => window.removeEventListener("scroll", handleScroll);
		}
	}, [lastScrollTop, autoHide]);

	if (!!!navMap) {
		navMap = themeConfig.navbar[locale].items;
	}

	return (
		<>
			<div
				className={`fixed left-0 right-0 top-0 z-50 flex h-[48px] justify-center bg-white backdrop-filter ${
					!subNavbar && "shadow-sm"
				} transition-all duration-300`}
				style={{ top: navbarTop }}
			>
				<div className="flex w-full items-center justify-between px-8 sm:w-fit sm:min-w-[976px]">
					<div>
						<Link href="/">
							<img width={36} src="/logo.svg"></img>
						</Link>
					</div>
					<div className="hidden sm:flex">
						{navMap.map((item) => {
							return (
								<Link
									className="ml-8 text-slate-500 hover:text-black"
									key={item.name}
									href={item.route}
								>
									{item.name}
								</Link>
							);
						})}
					</div>
					<button
						className="sm:hidden"
						onClick={() => setMenuOpen(!isMenuOpen)}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							height="24"
							viewBox="0 -960 960 960"
							className=" fill-slate-600"
							width="24"
						>
							<path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
						</svg>
					</button>
				</div>
			</div>

			{/* Mobile menu */}
			<div
				className={`fixed left-0 right-0 top-0 z-50 transform bg-white pb-4 transition-transform duration-300 sm:hidden ${
					isMenuOpen ? "translate-y-0" : "-translate-y-full"
				}`}
			>
				<div className="mt-2 flex flex-row-reverse items-center px-6">
					<button
						onClick={() => setMenuOpen(false)}
						className="rounded-full p-2"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							height="24"
							viewBox="0 -960 960 960"
							width="24"
							className="fill-slate-600"
						>
							<path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
						</svg>
					</button>
				</div>
				<div className="px-8">
					{navMap.map((item) => {
						return (
							<Link
								onClick={() => setMenuOpen(false)}
								className="block px-4 py-2 text-slate-500 hover:text-black"
								key={item.name}
								href={item.route}
							>
								{item.name}
							</Link>
						);
					})}
				</div>
			</div>

			{subNavbar && (
				<div className="sticky top-0 z-20 mt-[48px]">{subNavbar}</div>
			)}
		</>
	);
}
