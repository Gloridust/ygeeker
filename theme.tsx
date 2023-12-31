import Article from "@/components/layout/Article";
import DefaultLayout from "@/components/layout/Default";
import Documention from "@/components/layout/Documention";
import { Noto_Sans_Display, Koulen } from "next/font/google";
import { useRouter } from "next/router";
import React from "react";

const sans = Noto_Sans_Display({
	weight: ["400", "600", "700"],
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
		return <Documention pageOpts={pageOpts}>{children}</Documention>;
	}

	switch (pageOpts.route) {
		case "/about":
		case "/legal/privacy":
		case "/legal/terms/sites":
			return <Article pageOpts={pageOpts}>{children}</Article>;
		default:
			return (
				<DefaultLayout pageOpts={pageOpts}>{children}</DefaultLayout>
			);
	}
}

export default function Theme({ children, pageOpts }) {
	const { title, frontMatter, headings } = pageOpts;

	return (
		<div className={`${sans.variable} ${koulen.variable} font-sans`}>
			<Layout pageOpts={pageOpts}>{children}</Layout>
		</div>
	);
}
