"use client";

import React from "react";
import Link from "next/link";
import { Button, Typography } from "@mui/material";
import { navLinks } from "@/assets/libs/data";
import CloseIcon from "@/assets/icons/CloseIcon";
import MenuIcon from "@/assets/icons/MenuIcon";
import { Github } from "@/assets/icons/Github";
import { LinkedIn } from "@/assets/icons/LinkedIn";
import { WhatsApp } from "@/assets/icons/WhatsApp";
import { Tiktok } from "@/assets/icons/Tiktok";

export const social_media = [
  { name: "WhatsApp", path: "https://wa.me/84909751772", icon: <WhatsApp /> },
  { name: "Github", path: "https://github.com/Sangdang2203", icon: <Github /> },
  {
    name: "LinkedIn",
    path: "https://www.linkedin.com/in/dang-van-sang/",
    icon: <LinkedIn />,
  },
  { name: "Twister", path: "", icon: <Tiktok /> },
];

export default function HeaderComponent() {
  const [navigation, setNavigation] = React.useState(false);

  const handleNavigation = () => {
    setNavigation(!navigation);
  };

  const closeNavigation = () => {
    setNavigation(false);
  };

  return (
    <nav className="w-full h-[80px] px-3 md:px-[64px] z-50 shadow-lg">
      <div className="flex justify-between items-center">
        <Button className="text-2xl button">
          <span className="text-3xl">&nbsp;portfolio&nbsp;</span>
          <span aria-hidden="true" className="hover-text">
            &nbsp;portfolio&nbsp;
          </span>
        </Button>
        <div className="block md:flex items-center" onClick={handleNavigation}>
          <div className="w-[35.36px] h-[85.71px] hover:opacity-80 cursor-pointer z-50">
            {navigation ? <CloseIcon /> : <MenuIcon />}
          </div>
        </div>
      </div>

      <div
        className={`absolute top-[80px] right-0 left-0 bottom-0 z-50 bg-[#F4F4F4] w-full min-h-screen ease-in duration-70000 ${
          navigation ? "block" : "hidden"
        }`}
      >
        <div className="grid grid-cols-2 md:grid-cols-5 max-w-[669px] h-[295px]">
          <div className="flex flex-col px-[64px] py-[32px]">
            {navLinks.length > 0 &&
              navLinks.map((link) => (
                <Link
                  key={link.key}
                  href={link.href}
                  className="text-[#7D614B] w-[315px] h-[77px]"
                  onClick={closeNavigation}
                >
                  <Typography
                    variant="body1"
                    className="capitalize font-semibold"
                  >
                    {link.label}
                  </Typography>
                </Link>
              ))}
          </div>
        </div>
        <div className="w-full fixed bottom-0 right-0 bg-white py-2 hidden md:flex justify-end items-end">
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
      </div>
    </nav>
  );
}
