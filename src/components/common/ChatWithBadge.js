import React from "react";
import { Badge, IconButton } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";

export default function ChatWithBadge() {
  const messageCount = 5;
  return (
    <IconButton color="inherit">
      <Badge badgeContent={messageCount} color="warning" overlap="circular">
        <ChatIcon />
      </Badge>
    </IconButton>
  );
}
