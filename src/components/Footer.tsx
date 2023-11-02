import themeConfig from "@/theme.config";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function Footer({ actions, links, text }) {
	const { locale } = useRouter();

	if (!!!actions) {
		actions = themeConfig.footer[locale].actions;
		text = themeConfig.footer[locale].text;
		links = themeConfig.footer[locale].links;
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
						{links.map((link) => (
							<Link
								key={link.title}
								href={link.href}
								className="ml-4 hover:text-gray-700"
							>
								{link.title}
							</Link>
						))}
						<div className="flex items-center">
							<span className="pr-2">|</span>
							<Link
								className="flex items-center gap-x-1"
								href="/choose-country-region"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									height="24"
									viewBox="0 -960 960 960"
									width="24"
									className="fill-gray-500"
								>
									<path d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-155.5t86-127Q252-817 325-848.5T480-880q83 0 155.5 31.5t127 86q54.5 54.5 86 127T880-480q0 82-31.5 155t-86 127.5q-54.5 54.5-127 86T480-80Zm0-82q26-36 45-75t31-83H404q12 44 31 83t45 75Zm-104-16q-18-33-31.5-68.5T322-320H204q29 50 72.5 87t99.5 55Zm208 0q56-18 99.5-55t72.5-87H638q-9 38-22.5 73.5T584-178ZM170-400h136q-3-20-4.5-39.5T300-480q0-21 1.5-40.5T306-560H170q-5 20-7.5 39.5T160-480q0 21 2.5 40.5T170-400Zm216 0h188q3-20 4.5-39.5T580-480q0-21-1.5-40.5T574-560H386q-3 20-4.5 39.5T380-480q0 21 1.5 40.5T386-400Zm268 0h136q5-20 7.5-39.5T800-480q0-21-2.5-40.5T790-560H654q3 20 4.5 39.5T660-480q0 21-1.5 40.5T654-400Zm-16-240h118q-29-50-72.5-87T584-782q18 33 31.5 68.5T638-640Zm-234 0h152q-12-44-31-83t-45-75q-26 36-45 75t-31 83Zm-200 0h118q9-38 22.5-73.5T376-782q-56 18-99.5 55T204-640Z" />
								</svg>
								<span className="hidden sm:block">
									United States
								</span>
							</Link>
						</div>
					</div>
				</div>
			</footer>
		</section>
	);
}
