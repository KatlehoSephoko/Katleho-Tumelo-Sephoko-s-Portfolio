import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Katleho Tumelo Sephoko | Network Engineer & Software Developer",
  description: "Portfolio of Katleho Tumelo Sephoko, a South African Network Engineer and Software Developer specializing in networking, software development, systems, cybersecurity, cloud and practical technology solutions.",
  openGraph: {
    title: "Katleho Tumelo Sephoko | Portfolio",
    description: "Network Engineer & Software Developer bridging the gap between infrastructure and application development.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-zinc-950`}>{children}</body>
    </html>
  );
}
