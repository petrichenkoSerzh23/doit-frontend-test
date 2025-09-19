import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export default function PostFab({ onClick, component, href }) {
  return (
    <Fab
      component={component}
      href={href}
      aria-label="add-post"
      onClick={onClick}
      sx={{
        position: "fixed",
        bottom: 16,
        right: 16,
        bgcolor: "#2196f3",
        color: "#fff",
        "&:hover": { bgcolor: "#1976d2" },
      }}
    >
      <AddIcon />
    </Fab>
  );
}
