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
					twitter: "",
					description:
						"Rene starts coding when he was 14. He's more like a leading enginner than a CEO at YGeeker. He likes painting as well.",
				},
				{
					title: "Market Manager",
					name: "Gloridust",
					avator: "/image/team/gloridust.png",
					twitter: "",
					description: "",
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
					title: "Cleaner",
					name: "Bing",
					avator: "/image/team/bing.png",
					twitter: "",
					description: "",
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
						<p className="text-blue-500">@RealDonaldTrump</p>
					</div>
				</div>
			))}
		</div>
	);
};
