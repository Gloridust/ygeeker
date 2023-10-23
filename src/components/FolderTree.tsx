import useMeta from "@/utils/useMeta";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useMemo } from "react";
import { useState, useEffect } from "react";

const ChapterItem = ({ item, meta, handleCloseSidebar }) => {
	const [isOpen, setIsOpen] = useState(false);
	const { route } = useRouter();
	const toggleOpen = () => setIsOpen(!isOpen);

	const active = route === item.route;

	const folderMeta = meta[item.name] || item.name;

	if (!folderMeta) {
		return null;
	}

	const folderTitle = folderMeta.title || folderMeta || item.name;

	switch (item.kind) {
		case "Folder":
			return (
				<div className="mb-1 pl-4 text-slate-600">
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
						<span
							className={`ml-1 text-[.95rem] ${
								route.includes(item.route) && "font-bold"
							}`}
						>
							{folderTitle}
						</span>
					</div>
					{isOpen && (
						<div className="py-2 pl-2">
							<ChapterTree
								handleCloseSidebar={handleCloseSidebar}
								pageMap={item.children}
							/>
						</div>
					)}
				</div>
			);
		case "MdxPage":
			return (
				<div
					className={`mb-2 pl-8 text-[.95rem] text-slate-600 last-of-type:mb-0 ${
						active && "font-bold"
					}`}
				>
					<Link onClick={handleCloseSidebar} href={item.route}>
						{item.frontMatter?.title || item.name}
					</Link>
				</div>
			);
		default:
			return null;
	}
};

const deepSortPageMap = (pageMap, meta) => {
	return [...pageMap]
		.filter((item) => ["MdxPage", "Folder"].includes(item.kind))
		.sort((a, b) => {
			const metaA =
				a.kind == "MdxPage" ? a.frontMatter : meta[a.name] || {};
			const metaB =
				b.kind == "MdxPage" ? b.frontMatter : meta[b.name] || {};

			console.log("******", a.name, metaA);

			const posA =
				metaA.sidebar_position !== undefined
					? metaA.sidebar_position
					: 0;
			const posB =
				metaB.sidebar_position !== undefined
					? metaB.sidebar_position
					: 0;

			return posA - posB;
		})
		.map((item) => {
			if (item.kind === "Folder") {
				return {
					...item,
					children: deepSortPageMap(item.children, meta),
				};
			}
			return item;
		});
};

const ChapterTree = ({ pageMap, handleCloseSidebar }) => {
	const meta = useMeta(pageMap);

	const sortedPageMap = useMemo(
		() => deepSortPageMap(pageMap, meta),
		[pageMap, meta],
	);

	console.log("sorted", sortedPageMap);

	return (
		<div className="chapter-tree pr-2">
			{sortedPageMap.map((item, index) => (
				<ChapterItem
					handleCloseSidebar={handleCloseSidebar}
					key={index}
					item={item}
					meta={meta}
				/>
			))}
		</div>
	);
};

export default ChapterTree;
