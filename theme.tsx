import Head from "next/head";
import Navbar from "./src/components/Navbar";
import Link from "next/link";
import type { NextraThemeLayoutProps } from "nextra";

export default function Layout({ children, pageOpts }: NextraThemeLayoutProps) {
	const { title, frontMatter, headings ,pageMap} = pageOpts;

	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="og:image" content={frontMatter.image} />
			</Head>
			<Navbar />
			{/* <h1>My Theme</h1>
			Table of Contents:
			<ul>
				{headings.map((heading) => (
					<li key={heading.value}>{heading.value}</li>
				))}
			</ul> */}
			{pageMap.map((item) => {
				if (item.kind === "MdxPage") {
					return (
						<Link key={item.name} href={item.route}>
							{item.route}
						</Link>
					);
				}
				return null;
			})}
			<div style={{ border: "1px solid" }}>{children}</div>
		</>
	);
}
