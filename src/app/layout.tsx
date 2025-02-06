import "./globals.css";
import localFont from "next/font/local";
import FooterComponent from "@/components/TheFooter";
import HeaderComponent from "@/components/TheHeader";
import { Container } from "@mui/material";

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
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header>
          <HeaderComponent />
        </header>

        <Container className="z-0">{children}</Container>

        <footer id="contact" className="flex justify-center my-10">
          <FooterComponent />
        </footer>
      </body>
    </html>
  );
}
