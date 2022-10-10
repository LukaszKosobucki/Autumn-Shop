import Footer from "./Footer";
import Header from "./Header";
import { Grid, Box } from "@mui/material";
import { childrenInterface } from "../../interfaces/childrenInterface";
const MainLayout = ({ children }: childrenInterface) => {
  return (
    <Box component="main">
      <Header />
      <Grid
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          bgcolor: "#f7f4e1",
          minHeight: "100vh",
          minWidth: "100%",
          margin: 0,
          overflowX: "clip",
        }}
      >
        {children}
      </Grid>

      <Footer />
    </Box>
  );
};

export default MainLayout;
