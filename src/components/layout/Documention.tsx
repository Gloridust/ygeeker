import ChapterTree from "@/components/FolderTree";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import useMeta from "@/utils/useMeta";
import { MDXProvider } from "@mdx-js/react";
import Head from "next/head";
import { Link } from "nextra-theme-docs";
import React from "react";

export default function Documention({ pageOpts, children }) {
	const documentionMap = pageOpts.pageMap.find(
		(item) => item.name === "support",
	).children;

	const documentionSlug = /\/support\/([^\/]+)(\/)?/.exec(pageOpts.route)[1];

	const meta = useMeta(documentionMap)[documentionSlug];

	console.log("Doc Meta", meta);

	return (
		<>
			<Head>
				<title>{pageOpts.title}</title>
			</Head>
			<div>
				<Navbar
					autoHide={true}
					pageMap={pageOpts.pageMap}
					subNavbar={
						<div className="flex h-[3.0588235294rem] w-full justify-center border-b-2 border-b-slate-200 backdrop-blur-lg backdrop-filter">
							<div className="flex min-w-[976px] items-center justify-between px-8">
								<div className="text-lg">
									{meta?.title || "Documention"}
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
				<main className="relative flex min-h-screen justify-center pt-[40px]">
					<aside className="sticky top-[100px] w-[220px] self-start">
						<ChapterTree
							pageMap={
								documentionMap.find(
									(item) => item.name === documentionSlug,
								).children
							}
						/>
					</aside>
					<article className="bg-white px-2 py-6 md:w-[900px] md:rounded-3xl md:px-8">
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
