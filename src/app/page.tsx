import { Metadata } from "next";
import HomePage from "./(public)/home/page";
import image from "@/assets/images/pofolio_image.jpg";

export const metadata: Metadata = {
  title: "Portfolio | Sang Dang Van",
  description: "Welcome to my portfolio!",
  robots: "index, follow",
  keywords: [
    "portfolio",
    "frontend developer",
    "fullstack developer",
    "web development",
    "software engineering",
  ],
  openGraph: {
    images: [
      {
        url: image.src,
        width: 1200,
        height: 630,
        alt: "portfolio",
      },
    ],
  },
};

export default function Page() {
  return (
    <>
      <HomePage />
    </>
  );
}
