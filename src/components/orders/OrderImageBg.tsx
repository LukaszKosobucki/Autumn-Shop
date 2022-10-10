import { Grid, Box } from "@mui/material";

const OrderImageBg = () => {
  return (
    <Grid
      sx={{
        height: "19.6875rem",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        flexWrap: "nowrap",
        flexDirection: "row",
      }}
    >
      <Box
        component="img"
        sx={{
          height: "120.875rem",
          width: "19.6875rem",
          transform: "rotate(270deg)",
          objectPosition: "20% 0",
          objectFit: "cover",
        }}
        alt="BG for products Page"
        src="https://images.unsplash.com/photo-1603984719659-7af2c6f02a79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
      />
    </Grid>
  );
};

export default OrderImageBg;
