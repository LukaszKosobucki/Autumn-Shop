import Footer from "./Footer";
import Header from "./Header";
import { Box } from "@mui/material";
import { childrenInterface } from "../../interfaces/childrenInterface";
const MainLayout = ({ children }: childrenInterface) => {
  return (
    <Box
      component="div"
      sx={{
        bgcolor: "#f7f4e1",
      }}
    >
      <Header />
      <Box
        component="main"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          m: 2,
          bgcolor: "#f7f4e1",
          minHeight: "100vh",
        }}
      >
        {children}
      </Box>

      <Footer />
    </Box>
  );
};

export default MainLayout;
