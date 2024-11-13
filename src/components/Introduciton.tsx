"use client";

import { IconInfo } from "@/assets/icons/IconInfo";
import { Box, Typography } from "@mui/material";
import React from "react";

export default function IntroComponent() {
  const [showSummary, setShowSummary] = React.useState(false);
  const [hidden, setHidden] = React.useState(false);
  const toggleSummary = () => {
    setShowSummary(!showSummary);
    setHidden(!hidden);
  };
  return (
    <Box sx={{ my: 5 }}>
      <h3 className="text-lg md:text-[2rem]">Hello, I am</h3>
      <Typography
        variant="h6"
        className="uppercase ease-linear duration-500 cursor-pointer py-2 md:py-6 hover:text-red-900 "
      >
        <strong className="text-xl md:text-3xl">dang van sang</strong>
        <span className="capitalize mx-3 text-xl md:text-3xl">(Jonathan)</span>
      </Typography>
      <Typography className="text-sm md:text-[1.5rem]">
        I&apos;m a full stack developer.
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
        <div id="summary" className="mt-2 text-sm md:text-lg md:mt-4">
          <Typography className="py-2 md:py-4">
            As a recent graduate in Software Engineering, I have a solid
            understanding of programming languages such as Java and .NET, along
            with experience working with frameworks like React.js, Next.js.
            Although I have limited practical experience, I have participated in
            several academic projects that have helped me develop
            problem-solving skills and teamwork abilities.
          </Typography>
          <Typography>
            My short-term goal is to enhance skills in full-stack development,
            while my long-term aspiration is to move into leadership positions
            like team leader or project manager to contribute to the
            company&apos;s success.
          </Typography>
          <div className="mt-3">
            <Typography variant="body1" className="capitalize">
              strengths
            </Typography>
            <hr className="max-w-[70px]" />
            <Typography>
              Communication Skill - Build relationships, resolve conflicts and
              work effectively in teams.
            </Typography>
            <Typography>
              Analytical and ProblemSolving Skills - Used problem-solving skills
              to debug and enhance applications.
            </Typography>
          </div>
        </div>
      )}
    </Box>
  );
}
