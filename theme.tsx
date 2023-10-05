import type { NextraThemeLayoutProps } from "nextra";
import React from "react";

import Navbar from "./src/components/Navbar";

export default function Layout({ children }: NextraThemeLayoutProps) {
	return (
		<>
			<Navbar />
			<div>
				<h1>My Theme</h1>
				<div style={{ border: "1px solid" }}>{children}</div>
			</div>
		</>
	);
}
