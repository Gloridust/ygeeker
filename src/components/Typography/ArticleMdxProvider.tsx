import { MDXProvider } from "@mdx-js/react";
import React from "react";

export default function ArticleMdxProvider({ children }) {
	return (
		<MDXProvider
			components={{
				h1: (props) => (
					<h1
						className="leading=[1.08349] text-[2.8235294118rem] font-semibold"
						{...props}
					/>
				),
				h2: (props) => (
					<h2 className="py-2 text-[1.4em] font-bold" {...props} />
				),
				h3: (props) => (
					<h3
						className="leading=[1.125] py-2 text-[1.8823529412em] font-bold"
						{...props}
					/>
				),
				p: (props) => (
					<p
						className="mt-1 leading-[1.52947]  text-slate-700"
						{...props}
					/>
				),
				image: (props) => (
					// @ts-ignore
					<img className="mt-[0.75em] rounded-lg" {...props} />
				),
				li: (props) => (
					<li
						className="list-inside list-disc pl-2 text-slate-700"
						{...props}
					/>
				),
				a: (props) => (
					<a className="text-blue-600 hover:underline" {...props} />
				),
				pre: (props) => (
					<pre className="rounded bg-gray-100 p-4" {...props} />
				),
			}}
		>
			{children}
		</MDXProvider>
	);
}
