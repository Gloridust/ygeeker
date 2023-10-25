import DefaultLayout from "@/components/layout/Default";
import Documention from "@/components/layout/Documention";
import { useRouter } from "next/router";
import React from "react";

function Layout({ pageOpts, children, ...props }) {
	const { route, locale } = useRouter();

	if (/\/support\/(.+)/.test(pageOpts.route)) {
		return (
			<Documention locale={locale} pageOpts={pageOpts}>
				{children}
			</Documention>
		);
	}

	switch (pageOpts.route) {
		default:
			return (
				<DefaultLayout pageOpts={pageOpts}>{children}</DefaultLayout>
			);
	}
}

export default function Theme({ children, pageOpts }) {
	const { title, frontMatter, headings } = pageOpts;

	return <Layout pageOpts={pageOpts}>{children}</Layout>;
}
