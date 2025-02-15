"use client";

import { SnackbarProvider } from "notistack";

const SnackbarProviders = ({ children }) => {
  return (
    <SnackbarProvider
      maxSnack={3}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      autoHideDuration={3000}
    >
      {children}
    </SnackbarProvider>
  );
};

export default SnackbarProviders;
