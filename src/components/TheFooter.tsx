"use client";
import Link from "next/link";
import { social_media } from "./TheHeader";
import styles from "@/app/ui/footer.module.css";

export default function FooterComponent() {
  return (
    <>
      <div className={styles.card}>
        {social_media.length > 0 &&
          social_media.map((item) => {
            return (
              <Link
                key={item.name}
                href={item.path}
                className="mx-2"
                target="_blank"
                title={item.name}
              >
                {item.icon}
              </Link>
            );
          })}
      </div>
    </>
  );
}
