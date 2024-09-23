import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Route } from "./components/Route";
import { NavLink } from "./components/NavLink";
import { Counter } from "./components/Counter";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Next Tabs",
  description: "Showcasing persistent tabs in Next.js",
};

export default function RootLayout({
  children,
  tab_a,
  tab_b,
}: Readonly<{
  children: React.ReactNode;
  tab_a: React.ReactNode;
  tab_b: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col flex-1 items-center p-4 dark:text-gray-300`}
      >
        <div className="w-full max-w-screen-sm flex-col flex">
          <div className="flex-col flex gap-2 min-h-72">
            <div className="w-fit gap-4 text-center flex mx-auto py-2">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/tab-a">Tab A</NavLink>
              <NavLink href="/tab-b">Tab B</NavLink>
            </div>

            <div className="p-2 border dark:border-gray-500 rounded-md flex flex-col gap-2">
              <Counter label="Layout" />
              <Route path="/" component={children} />
              <Route path="/tab-a" component={tab_a} />
              <Route path="/tab-b" component={tab_b} />
            </div>
          </div>

          <div className="w-full [&_p]:mb-1">
            <hr className="w-full border-t dark:border-gray-500 mt-8 mb-2" />
            <h1 className="text-2xl font-bold mb-2">
              next-tabs{" "}
              <i className="text-base font-normal">
                Persistent route pages in Next.js
              </i>
            </h1>

            <p className="font-semibold">Description</p>
            <ul className="list-disc list-inside [&>li]:mb-2 mt-3 ml-2">
              <li>
                In Next.js, layouts automatically persist state across route
                changes.
              </li>

              <li>
                However, the client state for pages are reset on each
                navigation.
              </li>

              <li>
                This demo showcases how to maintain state across different
                routes using a layout component
              </li>
            </ul>

            <p className="font-semibold">Instructions</p>
            <ol className="list-decimal list-inside [&>li]:mb-2 mt-3 ml-2">
              <li>
                Click on the tabs above to navigate between the different routes
              </li>

              <li>
                The counters on each page will start once you navigate to the
                page
              </li>
              <li>
                Notice that all counters (not just layout counters) continue to
                increment even as you switch tabs
              </li>
              <li>
                This also works with switching tabs via the browser back and
                forward buttons
              </li>
            </ol>
          </div>
          <div className="w-full text-center mt-8">
            <Link href="https://github.com/rexfordessilfie/next-tabs">
              github ↗
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
