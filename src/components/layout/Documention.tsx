import ChapterTree from "@/components/FolderTree";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import useMeta from "@/utils/useMeta";
import { MDXProvider } from "@mdx-js/react";
import Head from "next/head";
import React from "react";
import { useState } from "react";

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
			<Meta title={pageOpts.title} />
			<div>
				<Navbar
					autoHide={true}
					pageMap={pageOpts.pageMap}
					subNavbar={
						<div className="flex h-[3.0588235294rem] w-full justify-center border-b-2 border-b-slate-200 backdrop-blur-lg backdrop-filter">
							<div className="flex w-full items-center justify-between px-8 sm:w-fit sm:min-w-[976px]">
								<div className="flex">
									<button
										onClick={() =>
											setDrawerOpen(!isDrawerOpen)
										}
										className="mr-3 sm:hidden"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											height="24"
											viewBox="0 -960 960 960"
											width="24"
										>
											<path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm440-80h120v-560H640v560Zm-80 0v-560H200v560h360Zm80 0h120-120Z" />
										</svg>
									</button>
									<div className="text-lg">
										{meta?.title || "Documention"}
									</div>
								</div>

								<div className="flex text-[.7058823529rem]">
									<div className="ml-3 px-2 py-1">
										Contact
									</div>
									<div className="ml-3 rounded-full bg-green-700 px-2 py-1 text-white">
										Download
									</div>
								</div>
							</div>
						</div>
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
