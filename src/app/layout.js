"use client";

import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import Sidebar from "./components/Layout/Sidebar";
import { SessionProvider } from "./context/SessionContext";
import SnackbarProviders from "./context/SnackbarProvider";
import theme from "./styles/theme";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <SnackbarProviders>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  minHeight: "100vh",
                }}
              >
                <Box
                  sx={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 1000,
                  }}
                >
                  <Header />
                </Box>
                <Box sx={{ display: "flex", flex: 1, overflow: "hidden" }}>
                  <Sidebar />
                  <Box
                    component="main"
                    sx={{
                      flex: 1,
                      padding: 3,
                      overflowY: "auto",
                      marginTop: "80px",
                    }}
                  >
                    {children}
                  </Box>
                </Box>
                <Footer />
              </Box>
            </SnackbarProviders>
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
