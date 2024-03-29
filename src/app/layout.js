import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "../../components";
// import React, { useState, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <link
          href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
          rel="stylesheet"
        ></link>
        <Header />
        {children}
      </body>
    </html>
  );
}
