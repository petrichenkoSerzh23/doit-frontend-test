"use client";

import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import ThemeToggle from "./ThemeToggle";
import CommentsDialog from "../posts/CommentsDialog";
import ChatWithBadge from "./ChatWithBadge";
import {
  fetchCommentsByPostId,
  selectCommentsByPostId,
} from "@/store/slices/postsSlice";

export default function AppBarCustom({ onMenuClick }) {
  const [openComments, setOpenComments] = React.useState(false);
  const pathname = usePathname();
  const dispatch = useDispatch();

  // id поста из URL
  const postId = /^\/posts\/\d+$/.test(pathname)
    ? pathname.split("/posts/")[1]
    : null;

  // комменты из стора
  const comments = useSelector((state) =>
    postId ? selectCommentsByPostId(state, postId) : []
  );

  // грузим комменты сразу при заходе на страницу поста
  React.useEffect(() => {
    if (postId) {
      dispatch(fetchCommentsByPostId(postId));
    }
  }, [dispatch, postId]);

  const getTitle = () => {
    const titles = {
      "/": "DOiT MVP",
      "/posts": "Усі пости",
      "/posts/create": "Створити пост",
    };

    if (titles[pathname]) return titles[pathname];
    if (postId) return `Пост #${postId}`;
    return "DOiT MVP";
  };

  const showChatIcon = !!postId;

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#2196f3", color: "#fff" }}
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

        {showChatIcon && (
          <>
            <ChatWithBadge
              count={comments.length}
              onClick={(e) => {
                e.currentTarget.blur();
                setOpenComments(true);
              }}
            />

            <CommentsDialog
              open={openComments}
              onClose={() => setOpenComments(false)}
              postId={postId}
            />
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}
