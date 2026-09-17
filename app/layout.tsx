import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CricketConnect Hyderabad",
  description: "Find cricket opponents across Hyderabad, organize fixtures, and build your player profile.",
  other: {
    "theme-color": "#102238",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
