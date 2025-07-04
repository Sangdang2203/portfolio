"use client";

import React from "react";
import { Typography } from "@mui/material";
import { IconInfo } from "@/assets/icons/IconInfo";
import AvatarComponent from "@/components/Avatar";

export default function IntroComponent() {
  const [showSummary, setShowSummary] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const toggleClick = () => {
    setShowSummary(!showSummary);
    setShow(!show);
  };
  return (
    <>
      <div className="my-5">
        <h3 className="text-sm md:text-lg">Hello, I am</h3>
        <div className="flex items-center">
          <Typography
            variant="h6"
            className="uppercase ease-linear duration-500 cursor-pointer py-2 md:py-6 hover:text-red-900 "
          >
            <strong className="text-lg md:text-2xl">dang van sang</strong>
          </Typography>
          <p className="capitalize mx-3 text-lg md:text-2xl">(Jonathan)</p>
        </div>
        <Typography className="text-sm md:text-lg">
          I&apos;m a software developer.
        </Typography>

        {!show && (
          <button
            onClick={toggleClick}
            className="my-10 relative inline-flex h-12 active:scale-95 transistion overflow-hidden rounded-lg p-[1px] focus:outline-none"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)]"></span>
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 undefined">
              <div className="flex items-center">
                <IconInfo />
                <Typography className="pl-2 uppercase">about me</Typography>
              </div>
            </span>
          </button>
        )}

        {showSummary && (
          <div id="summary" className="mt-2 md:mt-4">
            <Typography className="py-2 text-sm md:text-lg md:py-4">
              As a software engineer, I have strong skills in React.js and
              Next.js, along with experience in Java and ASP.NET Web APIs. I aim
              to enhance my full-stack capabilities over the next two years. My
              five-year goal is to leverage my technical expertise and
              leadership skills as a team leader, driving team performance and
              contributing to the organization&apos;s success.
            </Typography>
          </div>
        )}
      </div>
      <div className="flex justify-center lg:flex lg:justify-end">
        <AvatarComponent />
      </div>
    </>
  );
}
