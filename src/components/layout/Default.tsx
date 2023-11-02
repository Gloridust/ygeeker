import ChapterTree from "@/components/FolderTree";
import themeConfig from "@/theme.config";
import useMeta from "@/utils/useMeta";
import { MDXProvider } from "@mdx-js/react";
import { useRouter } from "next/router";
import React from "react";

import Meta from "../Meta";

export default function DefaultLayout({ pageOpts, children }) {
	const { locale } = useRouter();

	const Footer = themeConfig.footer[locale].component;
	const Navbar = themeConfig.navbar[locale].component;

	return (
		<>
			<Meta
				title={pageOpts.title}
				description={pageOpts.frontMatter.description}
				keywords={pageOpts.frontMatter.keywords}
			/>
			<div>
				<Navbar pageMap={pageOpts.pageMap} />
				<main className="min-h-[80vh] pt-[56px]">
					<div>{children}</div>
				</main>
				<Footer />
			</div>
		</>
	);
}
