import { createTheme } from "@mui/material";
// import "@fontsource/red-rose";
import RedRose from "./fonts/RedRose.ttf";
export const theme = createTheme({
  typography: {
    fontFamily: [{ RedRose }].join(","),
    fontSize: 16,
    h2: {
      fontSize: "2.5rem",
      fontWeight: 700,
      fontStyle: "normal",
      lineHeight: "47px",
      textDecoration: "none",
      textTransform: "none",
      fontFamily: "Red Rose",
    },
    button: {
      fontSize: "1rem",
      fontFamily: "Red Rose",
      fontWeight: 700,
      fontStyle: "normal",
      lineHeight: "120%",
      textDecoration: "none",
      textTransform: "none",
    },
  },
  palette: {
    primary: {
      main: "#3d405b",
    },
    secondary: {
      main: "#e67f64",
    },
  },
  components: {
    MuiToggleButton: {
      styleOverrides: {
        root: {
          borderRadius: 15,
          backgroundColor: "#e67f64",
          border: 0,
          py: 10,
          px: 20,
          margin: "0.4rem",
          transitionDuration: "0.3s",
          ":hover": {
            boxShadow: " 4px 4px 4px rgba(0, 0, 0, 0.25)",
            backgroundColor: "#e67f64",
            transitionDuration: "0.3s",
          },
        },
      },
    },
  },
});
