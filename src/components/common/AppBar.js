"use client";

import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ThemeToggle from "./ThemeToggle";
import { usePathname } from "next/navigation";
import ChatWithBadge from "./ChatWithBadge";
export default function AppBarCustom({ onMenuClick }) {
  const pathname = usePathname();

  const getTitle = () => {
    if (pathname === "/") return "DOiT MVP";
    if (pathname === "/posts") return "Усі пости";

    if (pathname.startsWith("/posts/")) {
      const id = pathname.split("/posts/")[1];
      return `Пост #${id}`;
    }

    return "DOiT MVP";
  };

  const showChatIcon = pathname.startsWith("/posts/");

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#2196f3",
        color: "#fff",
      }}
    >
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={onMenuClick}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {getTitle()}
        </Typography>

        <ThemeToggle />
         {showChatIcon && <ChatWithBadge />}
      </Toolbar>
    </AppBar>
  );
}
