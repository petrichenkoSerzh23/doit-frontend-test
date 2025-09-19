"use client";
import React from "react";
import {
  Box,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Avatar,
  Typography,
  Button,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { handleDeletePost } from "@/utils/postActions";
import { selectThemeMode } from "../../store/slices/themeSlice";
export default function PostDetail({ post }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const themeMode = useSelector(selectThemeMode);

  const handleDelete = async () => {
    try {
      await handleDeletePost(dispatch, post.id);
      router.push("/");
    } catch (err) {
      console.error("Ошибка при удалении поста:", err);
    }
  };
  return (
    <Box sx={{ mt: 4, display: "flex", justifyContent: "center" }}>
      <Card
        sx={{
          width: "100%",
          maxWidth: 1200,
          backgroundColor: themeMode === "dark" ? "#2b2a2a1a" : "white",
        }}
      >
        <CardHeader
          avatar={<Avatar>{post.title?.[0]?.toUpperCase()}</Avatar>}
          title={post.title}
          subheader={`User ${post.userId}`}
        />
        <CardContent>
          <Typography
            variant="body1"
            sx={{
              whiteSpace: "normal",
              textAlign: "justify",
              wordWrap: "break-word",
            }}
          >
            {post.body}
          </Typography>
        </CardContent>
        <CardActions sx={{ gap: 2, p: 2 }}>
          <Button
            variant="contained"
            color="error"
            startIcon={<DeleteIcon />}
            onClick={handleDelete}
          >
            Видалити
          </Button>
          <Button
            variant="outlined"
            onClick={() => router.push("/posts")}
            startIcon={<ArrowBackIcon />}
          >
            До списку
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}
