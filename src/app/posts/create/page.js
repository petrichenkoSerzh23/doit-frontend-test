"use client";
import { Box, Container } from "@mui/material";
import PostForm from "@/components/posts/PostForm";
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
          px: 5,
          py: 4,
        }}
      >
        <PostForm />
      </Container>
    </Box>
  );
}
