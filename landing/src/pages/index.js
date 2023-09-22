import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";

function HomepageHeader() {
	const { siteConfig } = useDocusaurusContext();
	return (
		<header className={clsx("hero hero--primary", styles.heroBanner)}>
			<div className="container">
				<h1 className="hero__title">{siteConfig.title}</h1>
				<p className="hero__subtitle">{siteConfig.tagline}</p>
				<div className={styles.buttons}>
					{/* <Link
						className="button button--secondary button--lg"
						to="/docs/intro"
					>
						Docusaurus Tutorial - 5min ⏱️
					</Link> */}
				</div>
			</div>
		</header>
	);
}

export default function Home() {
	const { siteConfig } = useDocusaurusContext();
	return (
		<body>
			<nav>
				<div>
					<div className="leading">Yungeeker</div>
					<div className="options">
						<a href="#" >Product</a>
						<a href="#" >Join us</a>
						<a href="#" >Podcast</a>
					</div>
				</div>
			</nav>
			<br />
			<br />
			<section>
				<HomepageHeader />
				<main>
					<HomepageFeatures />
				</main>
			</section>
		</body>
	);
}
