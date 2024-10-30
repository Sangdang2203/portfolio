"use client";

import { projectData } from "@/assets/libs/data";
import { a11yProps, CustomTabPanel } from "@/components/CustomTabPanel";
import {
  Business,
  CalendarMonth,
  Check,
  GitHub,
  People,
} from "@mui/icons-material";
import { Box, Divider, Tab, Tabs, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

export default function ProjectComponent() {
  const [currentTab, setCurrentTab] = React.useState(0);
  const handleChangeTab = (event: React.SyntheticEvent, newValue: number) => {
    setCurrentTab(newValue);
  };
  return (
    <>
      <button className="button" data-text="Project">
        <span className="actual-text">&nbsp;projects&nbsp;</span>
      </button>
      <Box>
        <Tabs
          sx={{ color: "white" }}
          value={currentTab}
          onChange={handleChangeTab}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
        >
          {projectData.map((item, index) => {
            return (
              <Tab
                sx={{
                  color: "white",
                  display: "flex",
                  justifyContent: "flex-start",
                }}
                key={index}
                label={item.title}
                {...a11yProps(index)}
              />
            );
          })}
        </Tabs>

        {projectData.map((item, index) => {
          return (
            <Box key={index} sx={{ mt: 3 }}>
              <CustomTabPanel value={currentTab} index={index}>
                <div className="flex my-2 items-start">
                  <CalendarMonth fontSize="small" className="mr-2" />
                  <Typography variant="body2">{item.duration}</Typography>
                </div>
                <div className="flex my-2 items-start">
                  <People fontSize="small" className="mr-2" />
                  <Typography variant="body2">
                    {item.teamSize + "members"}
                  </Typography>
                </div>
                <div className="flex my-2 items-start">
                  {item.githubLinks.length > 0 ? (
                    <GitHub fontSize="small" className="mr-2" />
                  ) : (
                    ""
                  )}
                  <Typography variant="body2">
                    {item.githubLinks.length > 0 &&
                      item.githubLinks.map((link) => {
                        return (
                          <Link key={link.id} href={link.link} target="_blank">
                            <Typography variant="body2">
                              {link.name + ": " + link.link}
                            </Typography>
                          </Link>
                        );
                      })}
                  </Typography>
                </div>
                <Typography variant="body2">{item.describe}</Typography>
                <Typography className="mt-2" variant="h6">
                  Technologies:
                </Typography>
                {item.technologies.map((tech, index) => {
                  return (
                    <div key={index} className="flex items-start my-2">
                      <Check
                        color="success"
                        fontSize="small"
                        className="mr-1"
                      />
                      <Typography variant="body2">
                        {tech.name + ": " + tech.description}
                      </Typography>
                    </div>
                  );
                })}
                <Typography className="mt-2" variant="h6">
                  Personal contributions:
                </Typography>
                {item.contributions.map((contribution, index) => {
                  return (
                    <div key={index} className="flex items-start my-2">
                      <Check
                        color="success"
                        fontSize="small"
                        className="mr-1"
                      />
                      <Typography variant="body2">
                        {contribution.describe}
                      </Typography>
                    </div>
                  );
                })}
              </CustomTabPanel>
            </Box>
          );
        })}
      </Box>
    </>
  );
}
