import Link from "next/link";
import { useState } from "react";

const countries = [
	{
		region: "Asia & Pacific",
		items: [
			{ name: "China Mainland", flag: "🇨🇳", href: "/zh-CN" },
			{ name: "Japan", flag: "🇯🇵", href: "" },
		],
	},
	{
		region: "America",
		items: [{ name: "United States", flag: "🇺🇸", href: "" }],
	},
	{
		region: "Europe",
		items: [
			{ name: "Russia", flag: "🇷🇺", href: "" },
			{ name: "Denmark", flag: "🇩🇰", href: "" },
			{ name: "France", flag: "🇫🇷", href: "" },
		],
	},
];

export default function RegionSelector() {
	const [selectedCountry, setSelectedCountry] = useState(null);

	return (
		<div className="bg-gray-100 p-8">
			<h2 className="mb-6 font-koulen text-5xl font-semibold">
				CHOOSE YOUR REGION OR COUNTRY
			</h2>
			{countries.map((region) => (
				<div key={region.region} className="mb-4">
					<h3 className="mb-2 font-sans text-2xl">{region.region}</h3>
					<div className="flex flex-wrap gap-4">
						{region.items.map((country) => (
							<Link href={country.href}>
								<button
									key={country.name}
									className={`flex items-center gap-2 rounded bg-white px-4 py-2 shadow focus:outline-none ${
										selectedCountry === country.name
											? "border-2 border-blue-500"
											: ""
									}`}
									onClick={() =>
										setSelectedCountry(country.name)
									}
								>
									<span>{country.flag}</span>
									<span>{country.name}</span>
								</button>
							</Link>
						))}
					</div>
				</div>
			))}
		</div>
	);
}
