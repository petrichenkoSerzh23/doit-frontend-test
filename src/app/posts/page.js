"use client";
import { Box, Container, Grid } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../store/slices/postsSlice";
import PostList from "../../components/posts/PostList";
import { selectAllPosts } from "../../store/slices/postsSlice";
import Link from "@mui/material/Link";
import PostFab from "@/components/posts/PostFab";

export default function PostsPage() {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);
  const status = useSelector((state) => state.posts.status);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPosts());
    }
  }, [status, dispatch]);
  return (
    <Box sx={{ mt: 4 }}>
      <Container maxWidth="lg">
      
        <PostList posts={posts} isLoading={status === "loading"} />
        <PostFab component={Link} href="/posts/create" />
      </Container>
    </Box>
  );
}
