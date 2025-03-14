"use client";

import React from "react";
import Link from "next/link";
import { experienceData } from "@/data";
import { Typography } from "@mui/material";
import {
  Business,
  CalendarMonth,
  Check,
  LocationOn,
} from "@mui/icons-material";
import PositionIcon from "@/assets/icons/PositionIcon";
import LinkIcon from "@/assets/icons/LinkIcon";
import CarouselComponent from "@/components/Carousel";

export default function WorkingExperienceComponent() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  return (
    <>
      <button className="button z-0" data-text="Experience">
        <span className="">&nbsp;experience&nbsp;</span>
      </button>

      {experienceData.slice(currentIndex, currentIndex + 1).map((item) => {
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
            <div className="flex my-2 items-start">
              {item.deployed_link ? <LinkIcon /> : ""}
              <p>
                {item.deployed_link ? (
                  <Link
                    href={item.deployed_link}
                    target="_blank"
                    className="text-sm md:text-lg mx-2"
                  >
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
      <CarouselComponent
        data={experienceData}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
    </>
  );
}
