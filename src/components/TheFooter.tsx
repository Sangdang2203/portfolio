"use client";
import Link from "next/link";
import "../assets/styles/footer.css";
import { social_media } from "./TheHeader";

export default function FooterComponent() {
  return (
    <>
      <div className="card">
        {social_media.length > 0 &&
          social_media.map((item) => {
            return (
              <Link
                key={item.name}
                href={item.path}
                className="mx-2"
                target="_blank"
              >
                {item.icon}
              </Link>
            );
          })}
      </div>
    </>
  );
}
