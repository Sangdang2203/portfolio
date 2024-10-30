"use client";

import { projectData } from "@/assets/libs/data";
import { Box, Tab, Tabs } from "@mui/material";
import React from "react";

export default function ProjectComponent() {
  const [currentTab, setCurrentTab] = React.useState(0);
  const handleChangeTab = (event: React.SyntheticEvent, newValue: number) => {
    setCurrentTab(newValue);
  };
  return (
    <>
      <Box sx={{ bgcolor: "background.paper" }}>
        <Tabs
          value={currentTab}
          onChange={handleChangeTab}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
        >
          {projectData.map((item) => {
            return <Tab key={item.id} label={item.title} />;
          })}
        </Tabs>
      </Box>
    </>
  );
}
