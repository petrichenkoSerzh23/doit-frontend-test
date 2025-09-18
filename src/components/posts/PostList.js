import { Grid } from "@mui/material";
import PostCard from "./PostCard";
import SkeletonGrid from "../common/SkeletonGrid";

export default function PostList({ posts, isLoading }) {
  return (
    <Grid container spacing={2}>
      {isLoading ? (
        <SkeletonGrid count={6} />
      ) : (
        posts.map((post) => (
      <Grid size={{ xs: 12, sm: 6, md: 4 }} key={post.id}>
            <PostCard post={post} />
          </Grid>
        ))
      )}
    </Grid>
  );
}
