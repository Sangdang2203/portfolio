"use client";

import React from "react";
import Link from "next/link";
import { Button, Typography } from "@mui/material";
import { navLinks } from "@/assets/libs/data";
import CloseIcon from "@/assets/icons/CloseIcon";
import MenuIcon from "@/assets/icons/MenuIcon";
import { IconGithub } from "@/assets/icons/IconGithub";
import { IconLinkedIn } from "@/assets/icons/IconLinkedIn";
import { IconTwister } from "@/assets/icons/IconTwister";
import { IconWhatsApp } from "@/assets/icons/IconWhatsApp";

export default function HeaderComponent() {
  // const [anchorElement, setAnchorElement] = React.useState<null | HTMLElement>(
  //   null
  // );
  // const open = Boolean(anchorElement);

  // const handleClick = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorElement(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setAnchorElement(null);
  // };
  const [navigation, setNavigation] = React.useState(false);

  const handleNavigation = () => {
    setNavigation(!navigation);
  };

  const closeNavigation = () => {
    setNavigation(false);
  };

  return (
    <nav className="w-full h-[100px] px-3 md:px-[64px] fixed top-0 left-0 z-50 shadow-lg">
      <div className="flex justify-between items-center">
        <Button className="text-2xl button">
          <span className="text-3xl">&nbsp;portfolio&nbsp;</span>
          <span aria-hidden="true" className="hover-text">
            &nbsp;portfolio&nbsp;
          </span>
        </Button>
        <div className="block md:flex items-center" onClick={handleNavigation}>
          <div className="block w-[35.36px] h-[85.71px] hover:opacity-80 cursor-pointer z-50">
            {navigation ? <CloseIcon /> : <MenuIcon />}
          </div>
        </div>
      </div>

      <div
        className={`absolute top-[100px] right-0 left-0 bottom-0 bg-[#F4F4F4] w-full min-h-screen ease-in duration-300 ${
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
        <div className="w-full fixed flex justify-end items-end bottom-0 right-0 bg-white py-2">
          <Link href="" className="mx-2">
            <IconGithub />
          </Link>
          <Link href="" className="mx-2">
            <IconLinkedIn />
          </Link>
          <Link href="" className="mx-2">
            <IconTwister />
          </Link>
          <Link href="" className="mx-2">
            <IconWhatsApp />
          </Link>
        </div>
      </div>
    </nav>
  );
}
