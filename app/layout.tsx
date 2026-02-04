import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Elasticsearch RAG Blog",
    description: "Advanced tutorials on RAG, Kubernetes, and Elastic.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <nav className="p-4 bg-slate-900 text-white">
                    <div className="container mx-auto flex justify-between items-center">
                        <a href="/" className="text-xl font-bold">ELK<span className="text-yellow-400">Hub</span></a>
                    </div>
                </nav>
                <main className="min-h-screen p-8 max-w-4xl mx-auto">
                    {children}
                </main>
            </body>
        </html>
    );
}
