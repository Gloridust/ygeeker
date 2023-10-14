import DefaultLayout from "@/components/layout/Default";
import Documention from "@/components/layout/Documention";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

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
				<DefaultLayout pageOpts={pageOpts}>{children}</DefaultLayout>
			);
	}
}

export default function Theme({ children, pageOpts }) {
	// These are just initial setup for Nextra themes
	const { route } = useRouter();

	const { title, frontMatter, headings } = pageOpts;

	return <Layout pageOpts={pageOpts}>{children}</Layout>;
}
