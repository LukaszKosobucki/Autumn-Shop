import { Box, Typography, Button } from "@mui/material";
import { useContext } from "react";
import { dataContext } from "../../ContextProvider";
const BasketFinalizeBox = () => {
  const { basketData } = useContext(dataContext);

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: " wrap",
        color: "#3d405b",
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "column",
        position: "sticky",
        top: 100,
      }}
    >
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Products Price: {}$
      </Typography>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Delivery Price: {}$
      </Typography>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Total Price: {}$
      </Typography>
      <Button>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Finalize
        </Typography>
      </Button>
    </Box>
  );
};

export default BasketFinalizeBox;
