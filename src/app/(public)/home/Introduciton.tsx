"use client";

import React from "react";
import { Typography } from "@mui/material";
import { IconInfo } from "@/assets/icons/IconInfo";

export default function IntroComponent() {
  const [showSummary, setShowSummary] = React.useState(false);
  const [hidden, setHidden] = React.useState(false);
  const toggleSummary = () => {
    setShowSummary(!showSummary);
    setHidden(!hidden);
  };
  return (
    <div className="my-5 z-0">
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
        I&apos;m a full-stack developer.
      </Typography>

      {!hidden && (
        <button
          onClick={toggleSummary}
          className="my-10 relative inline-flex h-12 active:scale-95 transistion overflow-hidden rounded-lg p-[1px] focus:outline-none"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)]"></span>
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 undefined">
            <div className="flex items-center">
              <IconInfo />
              <Typography className="ml-1 uppercase">about me</Typography>
            </div>
          </span>
        </button>
      )}

      {showSummary && (
        <div id="summary" className="mt-2 md:mt-4">
          <Typography className="py-2 text-sm md:text-lg md:py-4 ">
            As a software engineer, I possess a strong proficiency in React.js
            and Next.js, complemented by experience in Java and ASP.NET Web
            APIs.
          </Typography>
          <Typography className="text-sm md:text-lg">
            Over the next two years, I aim to further develop my full-stack
            skills, enhancing my versatility as a developer. My long-term
            aspiration is to attain a team leader position within the next five
            years, where I can leverage my leadership and technical expertise to
            elevate team performance and contribute to the sustainable success
            of the organization.
          </Typography>
        </div>
      )}
    </div>
  );
}
