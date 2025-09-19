"use client";

import { Box, Typography, Button, Stack, Paper } from "@mui/material";
import Link from "next/link";
import ArticleIcon from "@mui/icons-material/FormatListBulleted";
import PostAddIcon from "@mui/icons-material/AddCircleSharp";
import { useSelector } from "react-redux";
import { selectThemeMode } from "@/store/slices/themeSlice";

export default function HomeHero() {
  const themeMode = useSelector(selectThemeMode); // "light" или "dark"

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="flex-start"
      minHeight="40vh"
      sx={{
        backgroundColor: "background.default",
        px: 2,
        minWidth: 600,
        mt: 8,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 4,
          textAlign: "center",
          borderRadius: 3,
          background:
            themeMode === "light"
              ? "linear-gradient(to bottom right, rgba(144, 202, 249, 0.4), rgba(248, 187, 208, 0.4))"
              : "linear-gradient(135deg, #25252dff 0%, #2b2b3bff 50%, #5a2aa9ff 100%)",
          color: themeMode === "light" ? "#000" : "#fff",
        }}
      >
        <Typography variant="h2" component="h1" gutterBottom>
          Ласкаво просимо до DOiT MVP
        </Typography>

        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          Ми працюємо над MVP освітньої платформи. Приєднуйтесь до команди!
        </Typography>

        <Stack direction="row" spacing={2} justifyContent="center" mt={3}>
          <Button
            component={Link}
            href="/posts"
            variant="contained"
            sx={{
              color: "#fff",
              backgroundColor: "#2196f3",
              "&:hover": {
                backgroundColor: "#1976d2",
              },
            }}
            startIcon={<ArticleIcon />}
          >
            Переглянути пости
          </Button>
          <Button
            component={Link}
            href="/posts/create"
            variant="outlined"
            sx={{
              color: "#2196f3",
              borderColor: "#2196f3",
              "&:hover": {
                backgroundColor:
                  themeMode === "light"
                    ? "rgba(33, 150, 243, 0.08)"
                    : "rgba(33, 150, 243, 0.2)",
              },
            }}
            startIcon={<PostAddIcon />}
          >
            Додати пост
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
}
