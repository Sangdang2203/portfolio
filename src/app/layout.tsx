"use client";

import React from "react";
import "@/app/ui/globals.css";
import localFont from "next/font/local";
import { Container } from "@mui/material";
import FooterComponent from "@/components/TheFooter";
import HeaderComponent from "@/components/TheHeader";
import BackButton from "@/components/BackButton";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showBackButton, setShowBackButton] = React.useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const threshold = (2 / 3) * window.innerHeight;
    setShowBackButton(scrollY > threshold);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <html lang="en" data-bs-theme="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header>
          <HeaderComponent />
        </header>

        <Container>{children}</Container>

        <footer id="contact" className="flex justify-center my-10">
          <FooterComponent />
          {showBackButton && (
            <div className="fixed bottom-3 right-3" title="Back To Top">
              <BackButton />
            </div>
          )}
        </footer>
      </body>
    </html>
  );
}
