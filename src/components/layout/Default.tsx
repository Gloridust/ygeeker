import ChapterTree from "@/components/FolderTree";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import useMeta from "@/utils/useMeta";
import { MDXProvider } from "@mdx-js/react";
import Head from "next/head";
import { Link } from "nextra-theme-docs";
import React from "react";

import Meta from "../Meta";

export default function DefaultLayout({ pageOpts, children }) {
	return (
		<>
			<Meta title={pageOpts.title} />
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
