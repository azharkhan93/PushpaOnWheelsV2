"use client"
import type { Metadata } from "next";
import "./globals.css";
import { Footer, Navbar } from "./components";
import { revealAnimation } from "../utils/gsap";
import { useEffect } from "react";


// export const metadata: Metadata = {
//   title: "PushpaOnWheels",
//   description: "Pushpa on Wheels",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    revealAnimation();
  });

  return (
    <html lang="en">
      <head>
      <title>PushpaOnWheels</title>
        <meta name="description" content="Pushpa on Wheels" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/push1.png" />

      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

