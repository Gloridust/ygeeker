import DefaultLayout from "@/components/layout/Default";
import Documention from "@/components/layout/Documention";
import { Noto_Sans_Display, Koulen } from "next/font/google";
import { useRouter } from "next/router";
import React from "react";

const sans = Noto_Sans_Display({
	weight: "400",
	subsets: ["latin"],
	variable: "--font-noto-sans-display",
	display: "swap",
});

const koulen = Koulen({
	weight: "400",
	subsets: ["latin"],
	display: "swap",
	variable: "--font-koulen",
});

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

	return (
		<html className={`${sans.variable} ${koulen.variable}`}>
			<Layout pageOpts={pageOpts}>{children}</Layout>
		</html>
	);
}
