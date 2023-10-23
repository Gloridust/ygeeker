import ChapterTree from "@/components/FolderTree";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import useMeta from "@/utils/useMeta";
import { MDXProvider } from "@mdx-js/react";
import Head from "next/head";
import { Link } from "nextra-theme-docs";
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
				rel="icon"
				type="image/svg+xml"
				href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' height='100%25' stroke-miterlimit='10' style='fill-rule:nonzero;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;' version='1.1' viewBox='0 0 1024 1024' width='100%25' xml:space='preserve'%3E%3Cdefs/%3E%3CclipPath id='ArtboardFrame'%3E%3Crect height='1024' width='1024' x='0' y='0'/%3E%3C/clipPath%3E%3Cg clip-path='url(%23ArtboardFrame)' id='Layer-2' visibility='hidden'%3E%3Cpath d='M-162.052-162.494C-162.052-535.287 140.155-837.494 512.948-837.494C885.74-837.494 1187.95-535.287 1187.95-162.494C1187.95 210.298 885.74 512.506 512.948 512.506C140.155 512.506-162.052 210.298-162.052-162.494Z' fill='none' opacity='0.296512' stroke='%23000000' stroke-linecap='butt' stroke-linejoin='miter' stroke-width='9.80663'/%3E%3Cpath d='M-162.052 644.531C-162.052 271.738 140.155-30.4694 512.948-30.4694C885.74-30.4694 1187.95 271.738 1187.95 644.531C1187.95 1017.32 885.74 1319.53 512.948 1319.53C140.155 1319.53-162.052 1017.32-162.052 644.531Z' fill='none' opacity='0.296512' stroke='%23000000' stroke-linecap='butt' stroke-linejoin='miter' stroke-width='9.80663'/%3E%3Cpath d='M-162.052 1218.31C-162.052 845.517 140.155 543.309 512.948 543.309C885.74 543.309 1187.95 845.517 1187.95 1218.31C1187.95 1591.1 885.74 1893.31 512.948 1893.31C140.155 1893.31-162.052 1591.1-162.052 1218.31Z' fill='none' opacity='0.296512' stroke='%23000000' stroke-linecap='butt' stroke-linejoin='miter' stroke-width='9.80663'/%3E%3Cpath d='M-575.206 774.322C-575.206 401.53-272.998 99.3222 99.7943 99.3222C472.586 99.3222 774.794 401.53 774.794 774.322C774.794 1147.11 472.586 1449.32 99.7943 1449.32C-272.998 1449.32-575.206 1147.11-575.206 774.322Z' fill='none' opacity='0.296512' stroke='%23000000' stroke-linecap='butt' stroke-linejoin='miter' stroke-width='9.80663'/%3E%3Cpath d='M249.003 774.322C249.003 401.53 551.211 99.3222 924.003 99.3222C1296.8 99.3222 1599 401.53 1599 774.322C1599 1147.11 1296.8 1449.32 924.003 1449.32C551.211 1449.32 249.003 1147.11 249.003 774.322Z' fill='none' opacity='0.296512' stroke='%23000000' stroke-linecap='butt' stroke-linejoin='miter' stroke-width='9.80663'/%3E%3Cpath d='M479.742 512.506C479.742 493.943 494.609 478.895 512.948 478.895C531.286 478.895 546.153 493.943 546.153 512.506C546.153 531.068 531.286 546.116 512.948 546.116C494.609 546.116 479.742 531.068 479.742 512.506Z' fill='none' opacity='0.296512' stroke='%23000000' stroke-linecap='butt' stroke-linejoin='miter' stroke-width='3.24387'/%3E%3Cpath d='M99.7943-0.541201L603.786 1126.75' fill='none' opacity='0.296512' stroke='%23000000' stroke-linecap='butt' stroke-linejoin='miter' stroke-width='3.24387'/%3E%3Cpath d='M951.38-11.6585L428.132 1087.84' fill='none' opacity='0.296512' stroke='%23000000' stroke-linecap='butt' stroke-linejoin='miter' stroke-width='3.24387'/%3E%3C/g%3E%3Cg id='Layer-1'%3E%3Cpath d='M536.359 484.569C511.209 424.173 679.208 150.732 763.588 122.044C807.784 107.017 856.733 178.229 870.58 236.097C884.489 294.226 878.386 355 839.999 401.942C796.735 454.846 559.242 539.522 536.359 484.569Z' fill='%2363c862' fill-rule='nonzero' opacity='1' stroke='none'/%3E%3Cpath d='M474.634 497.831C438.142 515.942 345.876 492.7 249.483 455.774C164.575 423.249 61.3202 336.983 59.942 310.149C57.8513 269.441 117.444 232.482 186.296 219.851C255.457 207.162 336.632 204.59 382.316 242.947C459.763 307.972 542.72 464.04 474.634 497.831Z' fill='%23ffca3d' fill-rule='nonzero' opacity='1' stroke='none'/%3E%3Cpath d='M535.511 552.81C600.382 586.793 677.577 910.86 645.144 947.731C615.885 980.993 535.77 961.036 479.941 925.344C423.861 889.492 398.806 828.2 402.638 773.01C409.133 679.445 470.64 518.827 535.511 552.81Z' fill='%234ebffe' fill-rule='nonzero' opacity='1' stroke='none'/%3E%3C/g%3E%3Cg id='Layer-1-copy'/%3E%3C/svg%3E"
			/>
		</Head>
	);
}
