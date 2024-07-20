import type { Metadata } from "next";
import "./globals.css";
import { Footer, Navbar } from "./components";



export const metadata: Metadata = {
  title: "PushpaOnWheels",
  description: "pushpa on wheeels",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
