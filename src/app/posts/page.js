"use client";
import { Box, Container, Grid } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../store/slices/postsSlice";
import PostList from "../../components/posts/PostList";
import SearchBar from "../../components/common/SearchBar";
import { selectAllPosts } from "../../store/slices/postsSlice";
import { SpeedDialCreatePost } from "../../components/common/SpeedDialCreatePost";

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
    <Box >
      <Container maxWidth="lg" >
        <SearchBar />
        <PostList posts={posts} isLoading={status === "loading"} />

        {/* <SpeedDialCreatePost />  */}
      </Container>
    </Box>
  );
}
