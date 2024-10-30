"use client";

import React from "react";
import Link from "next/link";
import {
  Button,
  Fade,
  FormControlLabel,
  Menu,
  MenuItem,
  Switch,
  Tooltip,
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

  return (
    <div className={`my-10 w-full flex justify-between items-center`}>
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
          {links.map((link) => {
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
    </div>
  );
}
