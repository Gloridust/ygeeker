import type { NextraThemeLayoutProps } from "nextra";
import React from "react";

import Navbar from "./src/components/Navbar";

export default function Layout({ children }: NextraThemeLayoutProps) {
	return (
		<>
			<Navbar />
			<main className="pt-[56px]">{children}</main>
		</>
	);
}
