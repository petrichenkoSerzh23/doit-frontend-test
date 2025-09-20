import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Skeleton,
  Box,
  Grid,
} from "@mui/material";

export default function SkeletonPostCard({ count = 12 }) {
  return (
    <Grid container spacing={2}>
      {Array.from({ length: count }).map((_, index) => (
        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
          <Card sx={{ height: "100%" }}>
            <CardHeader
              avatar={<Skeleton variant="circular" width={40} height={40} />}
              title={<Skeleton variant="text" width="60%" />}
              subheader={<Skeleton variant="text" width="40%" />}
              action={<Skeleton variant="circular" width={40} height={40} />}
            />
            <CardContent>
              <Skeleton variant="text" width="100%" />
              <Skeleton variant="text" width="90%" />
              <Skeleton variant="text" width="80%" />
            </CardContent>

            <CardActions>
              <Box sx={{ display: "flex", gap: 1 }}>
                <Skeleton variant="circular" width={36} height={36} />
              </Box>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
