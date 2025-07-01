"use client";

import React from "react";
import Link from "next/link";
import { projectData } from "@/app/libs/data";
import { CalendarMonth, Check, LanguageRounded } from "@mui/icons-material";
import { Typography } from "@mui/material";
import CarouselComponent from "@/components/Carousel";

export default function ProjectComponent() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  return (
    <>
      <button className="button z-0" data-text="Project">
        <span className="text-green-700 font-bold">&nbsp;projects&nbsp;</span>
      </button>

      <div className="m-3 md:mx-10">
        {projectData.slice(currentIndex, currentIndex + 1).map((item) => {
          return (
            <div key={item.id} className="my-3 flex flex-col justify-between">
              <h3 className="uppercase text-2xl">{item.title}</h3>
              <div className="flex my-2 items-start">
                <CalendarMonth fontSize="small" className="mr-2" />
                <p className="text-sm md:text-lg">{item.duration}</p>
              </div>

              {item.deployedLinks.length > 0 ? (
                <div className="flex my-2 items-start">
                  <LanguageRounded fontSize="small" className="mr-2" />
                  {item.deployedLinks.map((item) => {
                    return (
                      <Link
                        key={item.id}
                        href={item.link}
                        className="text-sm md:text-lg"
                        target="_blank"
                      >
                        {item.link}
                      </Link>
                    );
                  })}
                </div>
              ) : (
                ""
              )}
              <p className="text-sm md:text-lg">{item.describe}</p>
              <Typography className="mt-2" variant="h6">
                Technologies:
              </Typography>
              {item.technologies.map((tech, index) => {
                return (
                  <div key={index} className="flex items-start my-2">
                    <Check color="success" fontSize="small" className="mr-1" />
                    <p className="text-sm md:text-lg">
                      {tech.name + ": " + tech.description}
                    </p>
                  </div>
                );
              })}
              <div>
                <Typography className="mt-2" variant="h6">
                  Key Features:
                </Typography>
                <p className="text-sm md:text-lg">{item.contributions}</p>
              </div>
            </div>
          );
        })}
      </div>
      <CarouselComponent
        data={projectData}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
    </>
  );
}
