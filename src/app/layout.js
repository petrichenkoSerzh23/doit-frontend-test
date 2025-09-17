import "./globals.css";
import ReduxProvider from "./providers/ReduxProvider";
import ThemeProvider from "./providers/ThemeProvider";
import AppLayoutClient from "./AppLayoutClient";

export const metadata = {
  title: "DOiT MVP",
  description: "DOiT MVP",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <ThemeProvider>
            <AppLayoutClient>{children}</AppLayoutClient>
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
