import { Link } from "nextra-theme-docs";
import React from "react";

export default function Summery({ children }) {
	return (
		<div className="mb-6 text-[1.6470588235rem] font-normal">
			<p>{children}</p>
		</div>
	);
}
