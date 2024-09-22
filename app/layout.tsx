import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Route } from "./components/Route";
import { NavLink } from "./components/NavLink";

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="w-fit gap-4 text-center flex mx-auto py-2">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/tab-a">Tab A</NavLink>
          <NavLink href="/tab-b">Tab B</NavLink>
        </div>

        <Route path="/" component={children} />
        <Route path="/tab-a" component={tab_a} />
        <Route path="/tab-b" component={tab_b} />
      </body>
    </html>
  );
}
