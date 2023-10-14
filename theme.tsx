import Documention from "@/components/layout/Documention";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

import Footer from "./src/components/Footer";
import Navbar from "./src/components/Navbar";

function Layout({ pageOpts, children }) {
	// Front matter of the current page:
	// pageOpts.frontMatter

	// You can build the sidebar based on the structure data from `pageMap`:
	// console.log(pageOpts);

	if (/\/support\/(.+)/.test(pageOpts.route)) {
		return <Documention pageOpts={pageOpts}>{children}</Documention>;
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
						<main className="min-h-screen pt-[56px]">
							<div>{children}</div>
						</main>
						<Footer />
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
