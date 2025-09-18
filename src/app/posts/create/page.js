"use client";
import { Box, Container, Typography, Button } from "@mui/material";
import PostForm from "../../../components/posts/PostForm";
export default function CreatePostPage() {
  return (
    <Box>
      <Container
        maxWidth="sm"
        sx={{
          mt: 4,
          mb: 4,
          boxShadow: 3,
          borderRadius: 2,
          px: 5, // padding слева/справа
          py: 4, // padding сверху/снизу
        }}
      >
        <PostForm />
      </Container>
    </Box>
  );
}
