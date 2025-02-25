import "./globals.css";
import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar";
import type React from "react"; // Added import for React

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Auth System",
  description: "A simple authentication system",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <main className="container mx-auto mt-4 p-4">{children}</main>
      </body>
    </html>
  );
}
