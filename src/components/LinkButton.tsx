import Link from "next/link";
import React from "react";

const LinkButton = ({ href, text }) => {
	return (
		<Link href={href}>
			<button className="mt-2 flex rounded-full py-2 text-blue-500 hover:underline sm:mt-0">
				{text}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					height="24"
					viewBox="0 -960 960 960"
					width="24"
					className="fill-blue-500"
				>
					<path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
				</svg>
			</button>
		</Link>
	);
};

export default LinkButton;
