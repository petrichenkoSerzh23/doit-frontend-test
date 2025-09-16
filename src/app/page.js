"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import AppBarCustom from "../components/common/AppBar";
import { toggleTheme } from "../store/slices/themeSlice";
import DrawerMenu from "../components/common/AppDrawer";
export default function Home() {
  const router = useRouter();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const handleDrawerOpen = () => setDrawerOpen(true);
  const handleDrawerClose = () => setDrawerOpen(false);

  const theme = useSelector((state) => state.theme.theme);

  const dispatch = useDispatch();

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };
  return (
    <div>
      <header>
        {" "}
        <AppBarCustom
          onMenuClick={handleDrawerOpen}
          isDarkMode={theme === "dark"}
          toggleTheme={handleToggleTheme}
        />
      </header>
      <DrawerMenu
        open={drawerOpen}
        onClose={handleDrawerClose}
        router={router}
      />
      <main>

        
      </main>
      <footer></footer>
    </div>
  );
}
