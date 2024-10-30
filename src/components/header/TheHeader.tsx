"use client";

import React from "react";
import { WbSunny, Nightlight } from "@mui/icons-material";
import Link from "next/link";
import { IconProject } from "@/assets/icons/IconProject";
import { DashiconsNetworking } from "@/assets/icons/DashiconsNetworking";
import {
  Button,
  Fade,
  FormControlLabel,
  Menu,
  MenuItem,
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
  },
  {
    key: "projects",
    label: "projects",
    href: "#project",
  },
  {
    key: "skills",
    label: "skills",
    href: "#skills",
  },
  {
    key: "education",
    label: "education",
    href: "#education",
  },
  {
    key: "contact",
    label: "contact",
    href: "#contact",
  },
];

export default function HeaderComponent() {
  const [theme, setTheme] = React.useState("light");
  const [anchorElement, setAnchorElement] = React.useState<null | HTMLElement>(
    null
  );
  const open = Boolean(anchorElement);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElement(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorElement(null);
  };

  React.useEffect(() => {
    // Prevent infinite loop by wrapping the state update in a useEffect
    const prefersDarkScheme = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setTheme(prefersDarkScheme ? "dark" : "light");
  }, []);

  const changeTheme = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTheme(event.target.checked ? "dark" : "light");
  };

  return (
    <div className={`my-10 w-full flex justify-between items-center ${theme}`}>
      <div className="flex justify-start items-center">
        <Button
          id="fade-button"
          aria-controls={open ? "fade-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          className="text-2xl button"
        >
          <span className="actual-text">&nbsp;portfilio&nbsp;</span>
          <span aria-hidden="true" className="hover-text">
            &nbsp;portfilio&nbsp;
          </span>
        </Button>
        <Menu
          id="fade-menu"
          MenuListProps={{
            "aria-labelledby": "fade-button",
          }}
          anchorEl={anchorElement}
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          {links.map((link, index) => {
            return (
              <MenuItem
                key={link.key}
                onClick={handleClose}
                className="capitalize"
              >
                <Link href={link.href}>{link.label}</Link>
              </MenuItem>
            );
          })}
        </Menu>
      </div>

      <FormControlLabel
        className="hidden "
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
