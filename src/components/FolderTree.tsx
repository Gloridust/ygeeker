import Link from "next/link";
import React from "react";
import { useState } from "react";

// import { FaChevronDown, FaChevronRight } from 'react-icons/fa';

const ChapterItem = ({ item }) => {
	const [isOpen, setIsOpen] = useState(false);
	const toggleOpen = () => setIsOpen(!isOpen);

	console.log(item);

	switch (item.kind) {
		case "Folder":
			return (
				<div className="py-1 pl-4 text-slate-600">
					<div
						className="flex cursor-pointer items-center"
						onClick={toggleOpen}
					>
						{isOpen ? (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								height="24"
								viewBox="0 -960 960 960"
								width="24"
								className="fill-slate-500"
							>
								<path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z" />
							</svg>
						) : (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								height="24"
								viewBox="0 -960 960 960"
								width="24"
								className=" fill-slate-500"
							>
								<path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
							</svg>
						)}
						<span className="ml-2">{item.name}</span>
					</div>
					{isOpen && <ChapterTree pageMap={item.children} />}
				</div>
			);
		case "MdxPage":
			return (
				<div className="py-1 pl-8 text-slate-600">
					<Link href={item.route}>
						{item.frontMatter?.title || item.name}
					</Link>
				</div>
			);
		default:
			return <a>No</a>;
	}
};

const ChapterTree = ({ pageMap }) => {
	console.log(pageMap);

	return (
		<div className="chapter-tree">
			{pageMap.map((item, index) => (
				<ChapterItem key={index} item={item} />
			))}
		</div>
	);
};

export default ChapterTree;
