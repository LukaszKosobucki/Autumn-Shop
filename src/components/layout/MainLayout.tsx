import Footer from "./Footer";
import Header from "./Header";
import { Box } from "@mui/material";
import { childrenInterface } from "../../interfaces/childrenInterface";
const MainLayout = ({ children }: childrenInterface) => {
  return (
    <Box component="main">
      <Header />
      <Box
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
      </Box>

      <Footer />
    </Box>
  );
};

export default MainLayout;
