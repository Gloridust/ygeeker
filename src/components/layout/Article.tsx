import themeConfig from "@/theme.config";
import { MDXProvider } from "@mdx-js/react";
import { useRouter } from "next/router";
import React from "react";

import Meta from "../Meta";

export default function Article({ children, pageOpts }) {
	const { locale } = useRouter();

	const Footer = themeConfig.footer[locale].component;
	const Navbar = themeConfig.navbar[locale].component;

	return (
		<>
			<Meta
				title={pageOpts.title}
				description={pageOpts.frontMatter.description}
				author={pageOpts.frontMatter.author}
			/>
			<div>
				<Navbar autoHide={true} />
				<main className="relative mt-16 flex justify-center bg-white py-8 sm:pt-[40px]">
					<article className="px-6 py-6 sm:px-2 md:w-[900px] md:rounded-3xl">
						<MDXProvider
							components={{
								h1: (props) => (
									<h1
										className="leading=[1] mb-6 text-center text-[2.8235294118rem] font-semibold"
										{...props}
									/>
								),
								h2: (props) => (
									<h2
										className="mt-3 py-4 text-[1.4em] font-bold"
										{...props}
									/>
								),
								h3: (props) => (
									<h3
										className="leading=[1.125] py-2 text-[1.8823529412em] font-bold"
										{...props}
									/>
								),
								p: (props) => (
									<p
										className="mt-2 leading-[1.52947] text-slate-700"
										{...props}
									/>
								),
								image: (props) => (
									// @ts-ignore
									<img className="mt-[0.75em]" {...props} />
								),
								li: (props) => (
									<li
										className="list-inside list-disc pl-2 text-slate-700"
										{...props}
									/>
								),
								ul: (props) => (
									<ul className="py-4" {...props} />
								),
								a: (props) => (
									<a
										className="text-blue-600 hover:underline"
										{...props}
									/>
								),
								pre: (props) => (
									<pre
										className="rounded bg-gray-100 p-4"
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
