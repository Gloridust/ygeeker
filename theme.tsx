import { MDXProvider } from "@mdx-js/react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

import ChapterTree from "./src/components/FolderTree";
import Footer from "./src/components/Footer";
import Navbar from "./src/components/Navbar";

function Layout({ pageOpts, children }) {
	// Front matter of the current page:
	// pageOpts.frontMatter

	// You can build the sidebar based on the structure data from `pageMap`:
	console.log(pageOpts);

	if (/\/support\/(.+)/.test(pageOpts.route)) {
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
							<div className="h-[3.0588235294rem] w-full bg-green-500"></div>
						}
					/>
					<main className="relative flex min-h-screen justify-center pt-[100px]">
						<aside className="sticky top-[100px] w-[220px] self-start">
							<ChapterTree
								pageMap={
									pageOpts.pageMap[5].children[2].children
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
										<img
											className="mt-[0.75em]"
											{...props}
										/>
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

	switch (pageOpts.route) {
		default:
			return (
				<>
					<Head>
						<title>{pageOpts.title}</title>
					</Head>
					<div>
						<Navbar pageMap={pageOpts.pageMap} />
						<main>
							<article>
								<MDXProvider components={{}}>
									{children}
								</MDXProvider>
							</article>
						</main>
						<footer>This is the footer</footer>
					</div>
				</>
			);
	}
}

export default function Theme({ children, pageOpts }) {
	// These are just initial setup for Nextra themes
	const { route } = useRouter();

	const { title, frontMatter, headings } = pageOpts;

	return <Layout pageOpts={pageOpts}>{children}</Layout>;
}
