"use client";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { setTheme } from "../../store/slices/themeSlice";

import {
  ThemeProvider as MuiThemeProvider,
  CssBaseline,
  createTheme,
} from "@mui/material";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#1976d2" },
    background: { default: "#fafafa" },
  },
});
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#90caf9" },
    background: { default: "#121212" },
  },
});

export default function ThemeProvider({ children }) {
  const dispatch = useDispatch();
  const themeMode = useSelector((state) => state.theme.theme);
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme && savedTheme !== themeMode) {
      dispatch(setTheme(savedTheme));
    }
  }, [dispatch]);

  const theme = themeMode === "dark" ? darkTheme : lightTheme;

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}
