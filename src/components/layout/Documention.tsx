import ChapterTree from "@/components/FolderTree";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import useMeta from "@/utils/useMeta";
import { MDXProvider } from "@mdx-js/react";
import React from "react";
import { useState } from "react";

import LocalNav from "../LocalNav";
import Meta from "../Meta";

export default function Documention({ pageOpts, locale, children }) {
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
					pageMap={pageOpts.pageMap}
					navMap={[
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
					]}
					subNavbar={
						<LocalNav
							title={meta?.title || "Documention"}
							leadingCallback={() => setDrawerOpen(!isDrawerOpen)}
						/>
					}
				/>
				<main className="relative flex min-h-screen justify-center pt-0 sm:pt-[40px]">
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
						<MDXProvider
							components={{
								h1: (props) => (
									<h1
										className="leading=[1.08349] text-[2.8235294118rem] font-semibold"
										{...props}
									/>
								),
								h2: (props) => (
									<h2
										className="py-2 text-[1.4em] font-bold"
										{...props}
									/>
								),
								h3: (props) => (
									<h3
										className="leading=[1.125] py-2 text-[1.8823529412em] font-bold"
										{...props}
									/>
								),
								p: (props) => (
									<p
										className="mt-1 leading-[1.52947]  text-slate-700"
										{...props}
									/>
								),
								image: (props) => (
									// @ts-ignore
									<img className="mt-[0.75em]" {...props} />
								),
								li: (props) => (
									<li
										className="list-inside list-disc"
										{...props}
									/>
								),
								a: (props) => (
									<a
										className="text-blue-600 hover:underline"
										{...props}
									/>
								),
								pre: (props) => (
									<pre
										className="rounded bg-gray-100 p-4"
										{...props}
									/>
								),
							}}
						>
							{children}
						</MDXProvider>
					</article>
				</main>
				<Footer />
			</div>
		</>
	);
}
