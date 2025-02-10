import { Metadata } from "next";
import HomePage from "./(public)/home/page";

export const metadata: Metadata = {
  title: "Portfolio | Sang Dang Van",
  description: "Welcome to my portfolio website!",
  keywords: [
    "portfolio",
    "frontend developer",
    "fullstack developer",
    "web development",
    "software engineering",
  ],
};

export default function Page() {
  return (
    <>
      <HomePage />
    </>
  );
}
