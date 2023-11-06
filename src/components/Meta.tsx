import Head from "next/head";
import React from "react";

export default function Meta({
	title,
	description = "",
	keywords = "",
	author = "",
	url = "",
	image = "",
}) {
	return (
		<Head>
			<title>{title}</title>

			<link
				rel="alternate"
				href="https://www.ygeeker.com/zh-CN"
				hrefLang="zh-CN"
			></link>

			{/* Primary Meta Tags */}
			<meta name="title" content={title} />
			<meta name="description" content={description} />
			<meta name="keywords" content={keywords} />
			<meta name="author" content={author} />

			{/* OpenGraph & Twitter Card Tags for Social Media */}
			<meta property="og:type" content="website" />
			<meta property="og:url" content={url} />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content={image} />

			<meta property="twitter:card" content="summary_large_image" />
			<meta property="twitter:url" content={url} />
			<meta property="twitter:title" content={title} />
			<meta property="twitter:description" content={description} />
			<meta property="twitter:image" content={image} />

			<link
				rel="apple-touch-icon"
				sizes="57x57"
				href="/apple-icon-57x57.png"
			/>
			<link
				rel="apple-touch-icon"
				sizes="60x60"
				href="/apple-icon-60x60.png"
			/>
			<link
				rel="apple-touch-icon"
				sizes="72x72"
				href="/apple-icon-72x72.png"
			/>
			<link
				rel="apple-touch-icon"
				sizes="76x76"
				href="/apple-icon-76x76.png"
			/>
			<link
				rel="apple-touch-icon"
				sizes="114x114"
				href="/apple-icon-114x114.png"
			/>
			<link
				rel="apple-touch-icon"
				sizes="120x120"
				href="/apple-icon-120x120.png"
			/>
			<link
				rel="apple-touch-icon"
				sizes="144x144"
				href="/apple-icon-144x144.png"
			/>
			<link
				rel="apple-touch-icon"
				sizes="152x152"
				href="/apple-icon-152x152.png"
			/>
			<link
				rel="apple-touch-icon"
				sizes="180x180"
				href="/apple-icon-180x180.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="192x192"
				href="/android-icon-192x192.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="32x32"
				href="/favicon-32x32.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="96x96"
				href="/favicon-96x96.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="16x16"
				href="/favicon-16x16.png"
			/>
			<link rel="manifest" href="/manifest.json" />
			<meta name="msapplication-TileColor" content="#ffffff" />
			<meta
				name="msapplication-TileImage"
				content="/ms-icon-144x144.png"
			/>
			<meta name="theme-color" content="#ffffff"></meta>
			<link
				rel="icon"
				type="image/svg+xml"
				href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512' fill='none'%3E%3Ccircle cx='255.5' cy='255.5' r='243.5' fill='white'/%3E%3Cg clip-path='url(%23clip0_613_34)'%3E%3Cpath d='M264.182 244.66C254.702 221.893 318.03 118.819 349.837 108.005C366.497 102.34 384.948 129.184 390.168 150.997C395.411 172.909 393.11 195.818 378.64 213.513C362.332 233.456 272.808 265.374 264.182 244.66Z' fill='%2363C862'/%3E%3Cpath d='M240.915 249.659C227.159 256.486 192.379 247.725 156.043 233.805C124.037 221.545 85.1148 189.027 84.5953 178.912C83.8072 163.567 106.271 149.635 132.225 144.873C158.295 140.09 188.894 139.121 206.115 153.58C235.309 178.091 266.58 236.921 240.915 249.659Z' fill='%23FFCA3D'/%3E%3Cpath d='M263.863 270.383C288.316 283.193 317.415 405.352 305.189 419.25C294.16 431.788 263.96 424.266 242.915 410.811C221.776 397.297 212.331 374.193 213.776 353.389C216.224 318.119 239.409 257.573 263.863 270.383Z' fill='%234EBFFE'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_613_34'%3E%3Crect width='386' height='386' fill='white' transform='translate(62 62)'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E"
			/>
		</Head>
	);
}
