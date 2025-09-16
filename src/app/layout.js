import ReduxProvider from "./providers/ReduxProvider"
import ThemeProvider from "./providers/ThemeProvider";
import "./globals.css";

export const metadata = {
  title: "DOiT MVP",
  description: "DOiT MVP",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <ThemeProvider>  {children}</ThemeProvider>
        
        </ReduxProvider>
      </body>
    </html>
  );
}
