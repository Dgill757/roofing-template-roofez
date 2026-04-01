import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Roof EZ: Premier Florida Roofing Company | Roofing Solutions",
  description: "Roof EZ is your premier Florida roofing company. Trusted for quality, expertise, and reliability. Discover top-notch roofing solutions with Roof EZ.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
