import { Link } from "nextra-theme-docs";
import React, { useState, useEffect } from "react";

export default function LocalNav({
	leadingCallback,
	title,
}: {
	leadingCallback?: any;
	title: String;
}) {
	return (
		<div className="flex h-[3.0588235294rem] w-full justify-center border-b-2 border-b-slate-200 backdrop-blur-lg backdrop-filter">
			<div className="flex w-full items-center justify-between px-8 sm:w-fit sm:min-w-[976px]">
				<div className="flex">
					{leadingCallback && (
						<button
							onClick={leadingCallback}
							className="mr-3 sm:hidden"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								height="24"
								viewBox="0 -960 960 960"
								width="24"
							>
								<path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm440-80h120v-560H640v560Zm-80 0v-560H200v560h360Zm80 0h120-120Z" />
							</svg>
						</button>
					)}
					<div className="text-lg">{title}</div>
				</div>

				<div className="flex text-[.7058823529rem]">
					<div className="ml-3 px-2 py-1">Contact</div>
					<div className="ml-3 rounded-full bg-green-700 px-2 py-1 text-white">
						Download
					</div>
				</div>
			</div>
		</div>
	);
}
