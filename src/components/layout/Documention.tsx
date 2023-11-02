import ChapterTree from "@/components/FolderTree";
import ArticleMdxProvider from "@/components/Typography/ArticleMdxProvider";
import themeConfig from "@/theme.config";
import useMeta from "@/utils/useMeta";
import { MDXProvider } from "@mdx-js/react";
import { useRouter } from "next/router";
import React from "react";
import { useState } from "react";

import LocalNav from "../LocalNav";
import Meta from "../Meta";

export default function Documention({ pageOpts, children }) {
	const { locale } = useRouter();

	const Footer = themeConfig.footer[locale].component;
	const Navbar = themeConfig.navbar[locale].component;

	const documentionMap = pageOpts.pageMap.find(
		(item) => item.name === "support",
	).children;

	const documentionSlug = /\/support\/([^\/]+)(\/)?/.exec(pageOpts.route)[1];

	const meta = useMeta(documentionMap)[documentionSlug];

	const [isDrawerOpen, setDrawerOpen] = useState(false);

	return (
		<>
			<Meta
				title={pageOpts.title}
				description={pageOpts.frontMatter.description}
			/>
			<div>
				<Navbar
					autoHide={true}
					subNavbar={
						<LocalNav
							title={meta?.title || "Documention"}
							leadingCallback={() => setDrawerOpen(!isDrawerOpen)}
						/>
					}
				/>
				<main className="relative flex min-h-[50vh] justify-center pt-0 sm:pt-[40px]">
					<aside
						className={`fixed bottom-0 top-[50px] z-40 transform bg-white transition-transform duration-300 sm:sticky sm:bottom-[unset] sm:top-[100px] sm:translate-x-0 sm:bg-inherit ${
							isDrawerOpen
								? "translate-x-0"
								: "-translate-x-[100vw]"
						} w-screen self-start sm:w-[220px]`}
					>
						<div className="flex flex-row-reverse items-center px-6 py-1 sm:hidden">
							<button
								onClick={() => setDrawerOpen(false)}
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
						<ChapterTree
							handleCloseSidebar={() => setDrawerOpen(false)}
							pageMap={
								documentionMap.find(
									(item) => item.name === documentionSlug,
								).children
							}
						/>
					</aside>
					<article className="bg-white px-6 py-6 sm:px-2 md:w-[900px] md:rounded-3xl md:px-8">
						<ArticleMdxProvider>{children}</ArticleMdxProvider>
					</article>
				</main>
				<Footer />
			</div>
		</>
	);
}
