import { Grid } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import SearchBar from "../../components/common/SearchBar";
import PostCard from "./PostCard";
import SkeletonGrid from "../common/SkeletonGrid";

import { fetchPosts, selectAllPosts } from "../../store/slices/postsSlice";
export default function PostList({ isLoading }) {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");

  const posts = useSelector(selectAllPosts);
  const status = useSelector((state) => state.posts.status);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPosts());
    }
  }, [status, dispatch]);

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <SearchBar
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Поиск по заголовку..."
      />
    
      <Grid container spacing={2}>
        {isLoading ? (
          <SkeletonGrid />
        ) : (
          filteredPosts.map((post) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={post.id}>
              <PostCard post={post} />
            </Grid>
          ))
        )}
      </Grid>
    </>
  );
}
