"use client";

import { experienceData } from "@/assets/libs/data";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import {
  Business,
  CalendarMonth,
  Check,
  LocationOn,
} from "@mui/icons-material";
import React from "react";
import { a11yProps, CustomTabPanel } from "@/components/CustomTabPanel";

export default function WorkingExperienceComponent() {
  const [currentTab, setCurrentTab] = React.useState(0);
  const handleChangeTab = (event: React.SyntheticEvent, newValue: number) => {
    setCurrentTab(newValue);
  };
  return (
    <>
      <Box>
        <button className="button" data-text="Experience">
          <span className="">&nbsp;experience&nbsp;</span>
        </button>
        <Tabs
          value={currentTab}
          onChange={handleChangeTab}
          textColor="inherit"
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
        >
          {experienceData.map((item, index) => {
            return (
              <Tab
                sx={{ color: "white" }}
                key={index}
                label={item.title}
                {...a11yProps(index)}
              />
            );
          })}
        </Tabs>
      </Box>

      {experienceData.map((item, index) => {
        return (
          <Box key={index} sx={{ mt: 3 }}>
            <CustomTabPanel value={currentTab} index={index}>
              <div className="flex my-2 items-start">
                <Business fontSize="small" className="mr-2" />
                <Typography variant="body1">{item.company}</Typography>
              </div>
              <div className="flex my-2 items-start">
                <CalendarMonth fontSize="small" className="mr-2" />
                <Typography variant="body2">{item.duration}</Typography>
              </div>
              <div className="flex my-2 items-start">
                <LocationOn fontSize="small" className="mr-2" />
                <Typography variant="body2">{item.address}</Typography>
              </div>
              <Typography variant="body2">{item.describe}</Typography>
              <Typography className="mt-2" variant="h6">
                Personal contributions:
              </Typography>
              {item.contributions.map((contribution, index) => {
                return (
                  <div key={index} className="flex items-start my-2">
                    <Check color="success" fontSize="small" className="mr-1" />
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
    </>
  );
}
