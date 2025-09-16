"use client";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Box,
} from "@mui/material";

export default function DrawerMenu({ open, onClose, router }) {
  const menuItems = [
    { text: "Головна", path: "/" },
    { text: "Усі пости", path: "/posts" },
    { text: "Створити пост", path: "/posts/create" },
  ];

  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <Box sx={{ width: 250 }} role="presentation" onClick={onClose}>
        <List>
          {menuItems.map((item) => (
            <ListItemButton
              key={item.text}
              onClick={() => router.push(item.path)}
            >
              <ListItemText primary={item.text} />
            </ListItemButton>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}
