import { Grid, Skeleton, Box } from "@mui/material";

export default function SkeletonGrid({ count = 6 }) {
  return (
    <Grid container spacing={2}>
      {Array.from({ length: count }).map((_, index) => (
        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
          <Box sx={{ borderRadius: 2, overflow: "hidden", boxShadow: 1 }}>
            <Skeleton variant="rectangular" height={180} />
            <Box sx={{ p: 2 }}>
              <Skeleton width="80%" height={24} />
              <Skeleton width="60%" height={20} sx={{ mt: 1 }} />
              <Skeleton width="40%" height={20} sx={{ mt: 0.5 }} />
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
