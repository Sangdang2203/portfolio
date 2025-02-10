"use client";

import React from "react";
import { experienceData } from "@/assets/libs/data";
import { IconButton, Typography } from "@mui/material";
import {
  Business,
  CalendarMonth,
  Check,
  LocationOn,
} from "@mui/icons-material";
import NextIcon from "@/assets/icons/NextIcon";
import PreviousIcon from "@/assets/icons/PreviousIcon";
import PositionIcon from "@/assets/icons/PositionIcon";
import LinkIcon from "@/assets/icons/LinkIcon";
import Link from "next/link";

export default function WorkingExperienceComponent() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % experienceData.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + experienceData.length) % experienceData.length
    );
  };

  const isNextDisabled = currentIndex + 1 >= experienceData.length;
  const isPrevDisabled = currentIndex === 0;
  return (
    <>
      <button className="button z-0" data-text="Experience">
        <span className="">&nbsp;experience&nbsp;</span>
      </button>

      {experienceData
        .reverse()
        .slice(currentIndex, currentIndex + 1)
        .map((item) => {
          return (
            <div key={item.id} className="m-3 md:mx-10">
              <div className="flex items-start mt-3">
                <Business fontSize="small" />
                <p className="text-sm md:text-lg mx-2">{item.company}</p>
              </div>
              <div className="flex my-2 items-start">
                <PositionIcon />
                <p className="text-sm md:text-lg mx-2">{item.role}</p>
              </div>
              <div className="flex my-2 items-start">
                <CalendarMonth fontSize="small" />
                <p className="text-sm md:text-lg mx-2">{item.duration}</p>
              </div>
              <div>
                <LinkIcon />
                <p>
                  {item.deployed_link ? (
                    <Link href={item.deployed_link} target="_blank">
                      {item.deployed_link}
                    </Link>
                  ) : (
                    ""
                  )}
                </p>
              </div>
              <div className="flex my-2 items-start">
                <LocationOn fontSize="small" />
                <p className="text-sm md:text-lg mx-2">{item.address}</p>
              </div>
              <p className="text-sm md:text-lg">{item.describe}</p>
              <Typography className="mt-2" variant="h6">
                Personal contributions:
              </Typography>
              {item.contributions.map((contribution, index) => {
                return (
                  <div key={index} className="flex items-start my-2">
                    <Check color="success" fontSize="small" className="mr-1" />
                    <p className="text-sm md:text-lg mx-2">
                      {contribution.describe}
                    </p>
                  </div>
                );
              })}
            </div>
          );
        })}
      <div className="flex justify-end items-center">
        <IconButton
          title="Previous"
          className={`${
            isPrevDisabled ? "cursor-not-allowed z-0 mx-[2px]" : "z-0 mx-[2px]"
          } `}
          onClick={prevSlide}
        >
          <PreviousIcon />
        </IconButton>
        <IconButton
          title="Next"
          className={`${
            isNextDisabled ? "cursor-not-allowed z-0 mx-[2px]" : "z-0 mx-[2px]"
          }`}
          onClick={nextSlide}
        >
          <NextIcon />
        </IconButton>
      </div>
    </>
  );
}
