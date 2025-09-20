import { IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import LightModeIcon from "@mui/icons-material/Brightness7";
import DarkModeIcon from "@mui/icons-material/Brightness4";
import { toggleTheme } from "@/store/slices/themeSlice";

export default function ThemeToggle() {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.theme.theme === "dark");

  return (
    <IconButton onClick={() => dispatch(toggleTheme())} color="inherit">
      {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
    </IconButton>
  );
}
