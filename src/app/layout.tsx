import type React from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar";
import { AuthProvider } from "@/contexts/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Auth System",
  description: "A simple authentication system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <NavBar />
          <main className="container mx-auto mt-4 p-4">{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}
