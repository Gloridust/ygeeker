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
					<Navbar pageMap={pageOpts.pageMap} />
					<main className="flex min-h-full justify-center pt-[120px]">
						<aside className="w-48">
							<ChapterTree
								pageMap={pageOpts.pageMap[5].children}
							/>
						</aside>
						<article className="max-w-[900px] bg-white px-6 py-6 md:rounded-3xl">
							<MDXProvider
								components={{
									h1: (props) => (
										<h1
											className="py-4 text-[2em] font-bold"
											{...props}
										/>
									),
									h2: (props) => (
										<h2
											className="py-2 text-[1.4em] font-bold"
											{...props}
										/>
									),
									p: (props) => (
										<p
											className="py-1 text-slate-700"
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
