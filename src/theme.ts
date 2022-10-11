import { createTheme } from "@mui/material";
import "@fontsource/red-rose/700.css";
import styles from "./palette.module.scss";

export const theme = createTheme({
  typography: {
    fontFamily: "Red Rose",
    fontSize: 16,

    h5: {
      fontSize: "1.25rem",
      fontFamily: "Red Rose",
      fontWeight: 700,
      fontStyle: "normal",
      textDecoration: "none",
      textTransform: "none",
      wordWrap: "break-word",
    },
    h2: {
      fontSize: "2.5rem",
      fontWeight: 700,
      fontStyle: "normal",
      textDecoration: "none",
      textTransform: "none",
      fontFamily: "Red Rose",
    },
    caption: {
      fontSize: "1rem",
      fontFamily: "Red Rose",
      fontWeight: 700,
      fontStyle: "normal",
      textDecoration: "none",
      textTransform: "none",
    },
    button: {
      fontSize: "1rem",
      fontFamily: "Red Rose",
      fontWeight: 700,
      fontStyle: "normal",
      textDecoration: "none",
      textTransform: "none",
    },
    body2: {
      fontSize: "0.8rem",
      fontFamily: "Red Rose",
      fontWeight: 400,
      fontStyle: "normal",
      textDecoration: "none",
      textTransform: "none",
      wordWrap: "break-word",
    },
  },
  palette: {
    primary: {
      main: styles.colorAutumnDuskAutumnDusk,
    },
    secondary: {
      main: styles.colorAutumnLightAutumnLight,
    },
    error: {
      main: styles.colorAutumnLeaf600,
    },
  },
  components: {
    MuiToggleButton: {
      styleOverrides: {
        root: {
          borderRadius: 15,
          backgroundColor: styles.colorAutumnLeaf400,
          border: 0,
          margin: "0.4rem",
          transitionDuration: "0.3s",
          "&.Mui-selected": {
            transitionDuration: "0.3s",
            backgroundColor: styles.colorAutumnLeaf500,
            ":hover": {
              backgroundColor: styles.colorAutumnLeaf400,
              transitionDuration: "0.3s",
              boxShadow: " 4px 4px 4px rgba(0, 0, 0, 0.25)",
            },
          },
          "&:hover": {
            boxShadow: " 4px 4px 4px rgba(0, 0, 0, 0.25)",
            backgroundColor: styles.colorAutumnLeaf400,
            transitionDuration: "0.3s",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          backgroundColor: styles.colorAutumnLight200,
          py: 10,
          px: 10,
          margin: "0.4rem 0.4rem 0 0 ",
          transitionDuration: "0.3s",

          ":hover": {
            boxShadow: " 4px 4px 4px rgba(0, 0, 0, 0.25)",
            backgroundColor: styles.colorAutumnLight200,
            transitionDuration: "0.3s",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          margin: 8,
          borderRadius: "0%",
          backgroundColor: styles.colorAutumnLight100,
          boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.25)",
          ":hover": { boxShadow: "6px 6px 5px rgba(0, 0, 0, 0.35)" },
        },
      },
    },
    MuiGrid: {
      styleOverrides: {
        root: {
          padding: 0,
          margin: 0,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "flext-start",
          alignItems: "flex-start",
          flexDirection: "column",
        },
      },
    },
  },
});
