import Footer from "./Footer";
import Header from "./Header";
import { Box } from "@mui/material";
const MainLayout = (props: any) => {
  return (
    <Box
      component="body"
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
        }}
      >
        {props.children}
      </Box>

      <Footer />
    </Box>
  );
};

export default MainLayout;
