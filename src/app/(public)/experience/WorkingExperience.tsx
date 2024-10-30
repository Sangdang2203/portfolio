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

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function WorkingExperienceComponent() {
  const [currentTab, setCurrentTab] = React.useState(0);
  const handleChangeTab = (event: React.SyntheticEvent, newValue: number) => {
    setCurrentTab(newValue);
  };
  return (
    <>
      <Box>
        <Tabs
          sx={{ color: "white" }}
          value={currentTab}
          onChange={handleChangeTab}
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

        {experienceData.map((item, index) => {
          return (
            <Box key={index} sx={{ mt: 3 }}>
              <CustomTabPanel value={currentTab} index={index}>
                <div className="flex my-2 items-start">
                  <Business fontSize="medium" className="mr-2" />
                  <Typography variant="body1">{item.company}</Typography>
                </div>
                <div className="flex my-2 items-start">
                  <CalendarMonth fontSize="medium" className="mr-2" />
                  <Typography variant="body2">{item.duration}</Typography>
                </div>
                <div className="flex my-2 items-start">
                  <LocationOn fontSize="medium" className="mr-2" />
                  <Typography variant="body2">{item.address}</Typography>
                </div>
                <Typography variant="body2">{item.describe}</Typography>
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
