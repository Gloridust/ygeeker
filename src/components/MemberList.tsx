import Link from "next/link";
import { useState } from "react";

export default () => {
	const [hoveredMember, setHoveredMember] = useState(null);

	return (
		<div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
			{[
				{
					title: "Co-founder",
					name: "Rene",
					avator: "/image/team/rene.png",
					twitter: "rea1DonandTrump",
					description:
						"Rene starts coding when he was 14. He's more like a leading enginner than a CEO at YGeeker. He likes painting as well.",
				},
				{
					title: "Market Manager",
					name: "Gloridust",
					avator: "/image/team/gloridust.png",
					twitter: "",
					description:
						"Gloridust comes from Chengdu and currently live in Yibin. He's a green hand for front-end and python and Rene is his master. Like coding, living, and faraway.",
				},
				{
					title: "CFO",
					name: "Charles",
					avator: "/image/team/charles.png",
					twitter: "",
					description:
						"Charles comes frrom Chengdu, China. He's a lgbtq+, and he likes hackintosh, XDA, and car.",
				},
				{
					title: "Art Director",
					name: "BinQQing",
					avator: "/image/team/bing.png",
					twitter: "SovietwanG114",
					description:
						"BinQQing has his own dream in design and art,he wants to achieve his dream somewhere like here.",
				},
			].map((item, index) => (
				<div
					className="flex flex-col items-center overflow-hidden rounded-2xl bg-white"
					onMouseEnter={() => setHoveredMember(index)}
					onMouseLeave={() => setHoveredMember(null)}
				>
					<div className="relative h-52 w-full">
						<div
							className={`absolute bottom-0 left-0 right-0 top-0 transition-opacity duration-300 ${
								hoveredMember === index
									? "opacity-0"
									: "opacity-100"
							}`}
						>
							<img
								src={item.avator}
								alt={`${item.name}`}
								className="h-full w-full object-contain"
							/>
						</div>
						<div
							className={`overflow-hidden p-3 transition-opacity duration-300 ${
								hoveredMember === index
									? "opacity-100"
									: "opacity-0"
							}`}
						>
							<p>{item.description}</p>
						</div>
					</div>
					<div className="px-2 py-6 text-center">
						<p className="font-regular text-sm">{item.title}</p>
						<h3 className="text-lg font-bold">{item.name}</h3>
						<p className="text-blue-500">
							<Link href={`https://twitter.com/${item.twitter}`}>
								@{item.twitter}
							</Link>
						</p>
					</div>
				</div>
			))}
		</div>
	);
};
