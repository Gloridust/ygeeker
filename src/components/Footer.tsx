import themeConfig from "@/theme.config";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const FOOT_LINKS = [
	{
		title: "Privacy",
		href: "/legal/privacy",
	},
	{
		title: "Term of Use",
		href: "",
	},
];

export default function Footer({ actions, text }) {
	const { locale } = useRouter();

	if (!!!actions) {
		actions = themeConfig.footer[locale].actions;
		text = themeConfig.footer[locale].text;
	}

	return (
		<section className="mt-2 flex justify-center">
			<footer className="max-w-[1200px] p-10">
				<div className="sm:flex sm:justify-between">
					<div className="h-full sm:mr-8 md:text-left">
						<h2 className="mb-4 text-2xl font-bold">YGeeker</h2>
						<p>{text}</p>
						<div className="flex"></div>
					</div>
					<div className="container mx-auto mt-4 grid-cols-1 gap-2 sm:mt-0 sm:grid md:grid-cols-2">
						{actions.map((link) => (
							<Link
								className="flex justify-end"
								href={link.href}
								key={link.title}
							>
								<div className="flex w-full cursor-pointer items-center justify-self-end rounded-lg p-2 hover:bg-white sm:max-w-xs">
									<div
										className={`rounded-full ${link.color} p-2`}
									>
										{link.icon}
									</div>
									<div className="ml-4">
										<h3 className="text-xl">
											{link.title}
										</h3>
										<p className="w-full text-sm text-slate-500">
											{link.description}
										</p>
									</div>
								</div>
							</Link>
						))}
					</div>
				</div>
				<div className="mt-10 flex items-center justify-between space-x-8">
					<img width={36} src="/logo.svg"></img>
					<div className="flex items-center space-x-2 text-sm text-gray-500">
						{FOOT_LINKS.map((link) => (
							<Link
								key={link.title}
								href={link.href}
								className="ml-4 hover:text-gray-700"
							>
								{link.title}
							</Link>
						))}
						<div className="hidden sm:flex">
							<span className="pr-2">|</span>
							<Link href="/choose-country-region">
								United States
							</Link>
						</div>
					</div>
				</div>
			</footer>
		</section>
	);
}
