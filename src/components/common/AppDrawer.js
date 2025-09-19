"use client";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
} from "@mui/material";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import ArticleIcon from "@mui/icons-material/Article";

import PostAddIcon from "@mui/icons-material/AddCircleSharp";

export default function DrawerMenu({ open, onClose, router }) {
  const menuItems = [
    { text: "Головна", path: "/", icon: <HomeIcon /> },
    { text: "Усі пости", path: "/posts", icon: <ArticleIcon /> },
    { text: "Створити пост", path: "/posts/create", icon: <PostAddIcon /> },
  ];

  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <Box sx={{ width: 250 }} role="presentation" onClick={onClose}>
        <List>
          {menuItems.map((item) => (
            <ListItemButton key={item.text} component={Link} href={item.path}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}
