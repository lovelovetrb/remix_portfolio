import Header from "~/components/Heaeder";
import CustomParticles from "~/components/CustomParticles";

import { cssBundleHref } from "@remix-run/css-bundle";

import { AnimatePresence, motion } from "framer-motion";

import type { LinksFunction, V2_MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import styles from "./styles/global.css";
import tailwindcss from "./styles/tailwind.css";
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
    href: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css",
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

export const meta: V2_MetaFunction = () => {
  return [
    {
      "twitter:card": "summary_image",
    },
    { "og:description": "HP Logo" },
    { "og:image": "twitter_card.png" },
  ];
};

export default function App() {
  return (
    <html lang="ja" className="h-full">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="h-full">
        <AnimatePresence mode="wait">
          <motion.div
            className="w-screen absolute z-10 text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Header />
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
