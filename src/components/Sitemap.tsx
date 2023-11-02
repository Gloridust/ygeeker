import themeConfig from "@/theme.config";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function Sitemap({ sitemapData }) {
	const { locale } = useRouter();

	if (!!!sitemapData) {
		sitemapData = themeConfig.sitemap[locale];
	}

	return (
		<div className="grid gap-4 py-4 md:grid-cols-3">
			{sitemapData.map((section, idx) => (
				<div key={idx} className="mb-4">
					<h2 className="mb-2 text-xl font-bold">{section.title}</h2>
					<ul>
						{section.links.map((link, linkIdx) => (
							<li key={linkIdx} className="mb-1">
								<Link
									href={link.href}
									className="text-blue-500 hover:underline"
								>
									{link.name}
								</Link>
							</li>
						))}
					</ul>
				</div>
			))}
		</div>
	);
}

export default Sitemap;
