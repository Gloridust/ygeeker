import { Link } from "nextra-theme-docs";
import React from "react";

export default function Documention({ children }) {
	return (
		<div className="flex justify-center">
			<article className="mw-[900px]">{children}</article>
		</div>
	);
}
