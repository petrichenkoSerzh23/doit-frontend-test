"use client";
import { Box, Container } from "@mui/material";
import Link from "@mui/material/Link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostList from "@/components/posts/PostList";
import PostFab from "@/components/posts/PostFab";
import { fetchPosts, selectAllPosts } from "@/store/slices/postsSlice";

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
