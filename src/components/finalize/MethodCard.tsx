import {
  Box,
  CardContent,
  CardMedia,
  Typography,
  ToggleButton,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { useContext } from "react";
import { dataContext } from "../../ContextProvider";

const MethodCard = ({ name }: any) => {
  const { selected, setSelected } = useContext(dataContext);
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        color: "#3d405b",
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      <Box
        sx={{
          flexWrap: "wrap",
          color: "#3d405b",
          justifyContent: "flex-start",
          alignItems: "center",
          flexDirection: "row",
          width: 100,
        }}
      >
        <CardMedia
          component="img"
          height="100"
          image="https://images.unsplash.com/photo-1515471897120-85416077e011?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29mZmVlJTIwYmFnfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="green iguana"
        />
      </Box>

      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {name}
        </Typography>
        <ToggleButton
          value="check"
          selected={selected}
          onChange={() => {
            setSelected(!selected);
          }}
        >
          {selected ? <CheckIcon /> : null}
        </ToggleButton>
      </CardContent>
    </Box>
  );
};

export default MethodCard;
