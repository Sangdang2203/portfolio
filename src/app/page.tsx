import { Metadata } from "next";
import HomePage from "./(public)/home/page";

export const metadata: Metadata = {
  title: "Portfolio | 0x00FF00",
  description: "Welcome to my portfolio website!",
  keywords: ["portfolio", "web development", "software engineering"],
};

export default function Page() {
  return (
    <>
      <HomePage />
    </>
  );
}
