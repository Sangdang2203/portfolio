"use client";

import React from "react";
import Link from "next/link";
import { navLinks } from "@/data";
import { Button, Typography } from "@mui/material";
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
  { name: "Tiktok", path: "", icon: <Tiktok /> },
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

        <div
          className="z-50 flex items-center text-[#fff]"
          onClick={handleNavigation}
        >
          <Typography
            variant="body1"
            className="hidden md:block uppercase cursor-pointer font-medium"
          >
            menu
          </Typography>
          <div className="block w-[35.36px] h-[85.71px] hover:opacity-80 cursor-pointer z-50 mr-4">
            {navigation ? <CloseIcon /> : <MenuIcon />}
          </div>
        </div>
      </div>

      <div
        className={`absolute top-[80px] right-0 left-0 bottom-0 bg-[#F4F4F4] w-full min-h-screen ease-in duration-300 z-50 ${
          navigation ? "block" : "hidden"
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-5">
          {navLinks.length > 0 &&
            navLinks.map((link) => (
              <div key={link.key}>
                <Link
                  href={link.href}
                  className="text-[#7D614B] text-center p-5 md:p-10"
                  onClick={closeNavigation}
                >
                  <Typography className="text-sm md:text-lg uppercase font-semibold hover:pl-3 ease-linear duration-200">
                    {link.label}
                  </Typography>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </nav>
  );
}
