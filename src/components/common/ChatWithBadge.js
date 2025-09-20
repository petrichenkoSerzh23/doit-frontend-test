"use client";

import React from "react";
import { Badge, IconButton } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";

export default function ChatWithBadge({ onClick, count = 0 }) {
  return (
    <IconButton color="inherit" onClick={onClick}>
      <Badge badgeContent={count} color="warning" overlap="circular">
        <ChatIcon />
      </Badge>
    </IconButton>
  );
}
