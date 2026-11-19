import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	useLoaderData,
} from "@remix-run/react";

import { AnimatePresence, motion } from "framer-motion";
import CustomParticles from "~/components/CustomParticles";
import Header from "~/components/Header";

import styles from "~/styles/global.css";
import tailwindcss from "~/styles/tailwind.css";
// This ensures that the icon CSS is loaded immediately before attempting to render icons
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

// Prevent fontawesome from dynamically adding its css since we did it manually above
config.autoAddCss = false;

export const links: LinksFunction = () => [
	...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
	{
		rel: "stylesheet",
		href: "https://fonts.googleapis.com/css2?family=Klee+One:wght@400;600&display=swap",
	},
	{
		rel: "stylesheet",
		href: "https://cdn.jsdelivr.net/npm/destyle.css@1.0.15/destyle.css",
	},
	{
		rel: "stylesheet",
		href: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css",
	},
	{
		rel: "stylesheet",
		href: styles,
	},
	{
		rel: "stylesheet",
		href: tailwindcss,
	},
];

export const loader = async () => {
	return json({ gaTrackingId: process.env.GA_TRACKING_ID });
};

export default function App() {
	const { gaTrackingId } = useLoaderData<typeof loader>();

	return (
		<html lang="ja">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width,initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body className="text-white">
				{process.env.NODE_ENV === "development" || !gaTrackingId ? null : (
					<>
						<script
							async
							src={`https://www.googletagmanager.com/gtag/js?id=${gaTrackingId}`}
						/>
						<script
							id="gtag-init"
							// biome-ignore lint/security/noDangerouslySetInnerHtml: GA4初期化スクリプト
							dangerouslySetInnerHTML={{
								__html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gaTrackingId}');
`,
							}}
						/>
					</>
				)}
				<Header />
				<AnimatePresence mode="wait">
					<motion.div
						className="w-screen absolute z-10 mt-10"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
					>
						<Outlet />
					</motion.div>
				</AnimatePresence>
				<CustomParticles />
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	);
}
