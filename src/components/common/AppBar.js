"use client";

import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import ThemeToggle from "./ThemeToggle";

export default function AppBarCustom({ onMenuClick }) {
  const theme = useTheme();

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#2196f3", // завжди синій
        color: "#fff", // текст і іконки білі
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
          DOiT MVP
        </Typography>

        <ThemeToggle />
      </Toolbar>
    </AppBar>
  );
}
