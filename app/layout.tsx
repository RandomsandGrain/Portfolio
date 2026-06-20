import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Esteban | Frontend Developer",
  description: "Portfolio of Esteban, a frontend developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-gray-900 text-white">
        <nav className="flex items-center justify-between px-8 py-5 border-b border-zinc-800">
          <Link href="/" className="text-lg font-semibold tracking-tight hover:underline">Home</Link>
          <div className="flex gap-8 text-sm text-zinc-400">
            <Link href="/about" className="hover:bg-gray-700 transition-colors bg-black text-white p-2 rounded-2xl">About</Link>
            <Link href="/projects" className="hover:bg-gray-700 transition-colors bg-black text-white p-2 rounded-2xl">Projects</Link>
          </div>
        </nav>
        <main className="flex-1">
          {children}
        </main>
      </body>
    </html>
  );
}