import type { Metadata } from "next";

import "./globals.css";
import Navbar from "./components/common/navbar";
import Footer from "./components/common/footer";
import React from "react";

export const metadata: Metadata = {
  title: "Enchula Resort",
  description: "Experience luxury, comfort, and nature at Enchula Resort.",
  icons: {
    icon: "https://enchula-resort-4376242942.s3.eu-west-1.amazonaws.com/app/Enchula+Logo.jpeg",
    shortcut: "https://enchula-resort-4376242942.s3.eu-west-1.amazonaws.com/app/Enchula+Logo.jpeg",
    apple: "https://enchula-resort-4376242942.s3.eu-west-1.amazonaws.com/app/Enchula+Logo.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <Navbar />
        <div id="top" />
        <main className="grow flex flex-col w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}