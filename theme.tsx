import { MDXProvider } from "@mdx-js/react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

import Navbar from "./src/components/Navbar";

function Layout({ pageOpts, children }) {
	// Front matter of the current page:
	// pageOpts.frontMatter

	// You can build the sidebar based on the structure data from `pageMap`:
	console.log(pageOpts.pageMap);

	return (
		<>
			<Head>
				<title>{pageOpts.title}</title>
			</Head>
			<div>
				<Navbar pageMap={pageOpts.pageMap} />
				<main>
					<article>
						<MDXProvider components={{}}>{children}</MDXProvider>
					</article>
				</main>
				<footer>This is the footer</footer>
			</div>
		</>
	);
}

export default function Theme({ children, pageOpts }) {
	// These are just initial setup for Nextra themes
	const { route } = useRouter();

	const { title, frontMatter, headings } = pageOpts;

	return <Layout pageOpts={pageOpts}>{children}</Layout>;
}
