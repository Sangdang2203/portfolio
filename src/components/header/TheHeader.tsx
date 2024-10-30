"use client";

import React from "react";
import Link from "next/link";
import { Button, Popover, Box } from "@mui/material";
import { MenuSharp } from "@mui/icons-material";

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
        <Button className="text-2xl button">
          <span className="text-3xl">&nbsp;portfolio&nbsp;</span>
          <span aria-hidden="true" className="hover-text">
            &nbsp;portfolio&nbsp;
          </span>
        </Button>
      </div>

      <div>
        <Button onClick={handleClick} className="text-2xl button md:hidden">
          <MenuSharp fontSize="large" color="primary" />
        </Button>
        <Popover
          id="fade-menu"
          anchorEl={anchorElement}
          open={open}
          onClose={handleClose}
          transitionDuration={300}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <Box
            display="flex"
            flexDirection="column"
            padding={1}
            bgcolor="background.paper"
          >
            {links.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className="capitalize p-2"
                onClick={handleClose}
              >
                {link.label}
              </Link>
            ))}
          </Box>
        </Popover>
      </div>
    </div>
  );
}
