import Link from "next/link";
import React from "react";
// import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
import { useState, useEffect } from "react";

const ChapterItem = ({ item, meta }) => {
	const [isOpen, setIsOpen] = useState(false);
	const toggleOpen = () => setIsOpen(!isOpen);

	const folderTitle = meta[item.name] || item.name;

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
						<span className="ml-2">{folderTitle}</span>
					</div>
					{isOpen && (
						<div className="py-1 pl-2">
							<ChapterTree pageMap={item.children} />
						</div>
					)}
				</div>
			);
		case "MdxPage":
			return (
				<div className="mb-1 pl-8 text-slate-600 last:pb-0 last-of-type:mb-0">
					<Link href={item.route}>
						{item.frontMatter?.title || item.name}
					</Link>
				</div>
			);
		default:
			return null;
	}
};

const ChapterTree = ({ pageMap }) => {
	const [meta, setMeta] = useState({});

	useEffect(() => {
		const metaItem = pageMap.find((item) => item.kind === "Meta");
		if (metaItem) {
			setMeta(metaItem.data);
		}
	}, [pageMap]);

	return (
		<div className="chapter-tree pr-2">
			{pageMap.map((item, index) => (
				<ChapterItem key={index} item={item} meta={meta} />
			))}
		</div>
	);
};

export default ChapterTree;
