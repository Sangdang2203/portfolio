"use client";

import React from "react";
import Link from "next/link";
import { projectData } from "@/data";
import {
  CalendarMonth,
  Check,
  GitHub,
  People,
  LanguageRounded,
} from "@mui/icons-material";
import { Typography } from "@mui/material";
import CarouselComponent from "@/components/Carousel";

export default function ProjectComponent() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  return (
    <>
      <button className="button z-0" data-text="Project">
        <span className="">&nbsp;projects&nbsp;</span>
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
              <div className="flex my-2 items-start">
                <People fontSize="small" className="mr-2" />
                <p className="text-sm md:text-lg">
                  {item.teamSize + " members"}
                </p>
              </div>
              <div className="flex my-2 items-start">
                {item.githubLinks.length > 0 ? (
                  <GitHub fontSize="small" className="mr-2" />
                ) : (
                  ""
                )}
                <div>
                  {item.githubLinks.length > 0 &&
                    item.githubLinks.map((link) => {
                      return (
                        <Link
                          key={link.id}
                          href={link.link}
                          className="text-sm md:text-lg"
                          target="_blank"
                        >
                          {link.name + ": " + link.link}
                        </Link>
                      );
                    })}
                </div>
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
              <Typography className="mt-2" variant="h6">
                Personal contributions:
              </Typography>
              {item.contributions.map((contribution, index) => {
                return (
                  <div key={index} className="flex items-start my-2">
                    <Check color="success" fontSize="small" className="mr-1" />
                    <p className="text-sm md:text-lg">
                      {contribution.describe}
                    </p>
                  </div>
                );
              })}
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
