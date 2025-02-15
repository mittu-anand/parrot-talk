import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4fb86e",
    },
    secondary: {
      main: "#dc004e",
    },
  },
  typography: {
    fontFamily: 'monospace',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
  },
  spacing: 4,
  text: {
    primary: "#4fb86e",
    secondary: "#eec71c",
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#ffffff",
        },
      },
    },
  },
});

export default theme;
