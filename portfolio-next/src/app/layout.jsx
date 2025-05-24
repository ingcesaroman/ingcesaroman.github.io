import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cesar Roman | Software Engineer & AI Enthusiast",
  description: "Portfolio showcasing my work in software testing, development, and AI integration.",
  keywords: ["software testing", "web development", "AI", "automation", "quality assurance"],
  authors: [{ name: "Cesar Roman" }],
  creator: "Cesar Roman",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ingcesaroman.github.io",
    title: "Cesar Roman | Software Engineer & AI Enthusiast",
    description: "Portfolio showcasing my work in software testing, development, and AI integration.",
    siteName: "Cesar Roman Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cesar Roman | Software Engineer & AI Enthusiast",
    description: "Portfolio showcasing my work in software testing, development, and AI integration.",
    creator: "@ingcesaroman",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
