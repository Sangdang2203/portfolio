"use client";

import React from "react";
import { WbSunny, Nightlight } from "@mui/icons-material";
import Link from "next/link";
import { IconProject } from "@/assets/icons/IconProject";
import { DashiconsNetworking } from "@/assets/icons/DashiconsNetworking";
import {
  FormControlLabel,
  Switch,
  ToggleButton,
  ToggleButtonGroup,
  Tooltip,
  Typography,
} from "@mui/material";

const links = [
  {
    key: "experience",
    label: "experience",
    href: "#experience",
    icon: <DashiconsNetworking className="text-white" />,
  },
  {
    key: "projects",
    label: "projects",
    href: "#project",
    icon: <IconProject className="text-white" />,
  },
];

export default function HeaderComponent() {
  const [current, setCurrent] = React.useState("");
  const [theme, setTheme] = React.useState("light");

  React.useEffect(() => {
    // Prevent infinite loop by wrapping the state update in a useEffect
    const prefersDarkScheme = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setTheme(prefersDarkScheme ? "dark" : "light");
  }, []);

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newValue: string
  ) => {
    setCurrent(newValue);
  };

  const changeTheme = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTheme(event.target.checked ? "dark" : "light");
  };

  return (
    <div className={`w-full flex justify-between items-center ${theme}`}>
      <div className="flex justify-start items-center">
        <Typography className="text-2xl uppercase dark:text-white ">
          portfolio
        </Typography>
      </div>
      <ToggleButtonGroup
        color="primary"
        value={current}
        exclusive
        onChange={handleChange}
      >
        {links.map((item) => {
          return (
            <Link key={item.key} href={item.href}>
              <ToggleButton value={item.key}>
                <span>{item.icon}</span>
                <Typography className="mx-1 capitalize text-white text-sm md:text-xl">
                  {item.label}
                </Typography>
              </ToggleButton>
            </Link>
          );
        })}
      </ToggleButtonGroup>

      <FormControlLabel
        className="hidden md:block"
        control={
          <Switch
            size="small"
            checked={theme === "dark"}
            onChange={changeTheme}
          />
        }
        label={
          theme === "light" ? (
            <Tooltip title="Light mode">
              <WbSunny fontSize="small" className="ml-2" />
            </Tooltip>
          ) : (
            <Tooltip title="Dark mode">
              <Nightlight fontSize="small" className="ml-2" />
            </Tooltip>
          )
        }
      />
    </div>
  );
}
