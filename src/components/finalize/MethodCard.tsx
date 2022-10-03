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

const MethodCard = ({ name, imgUrl }: any) => {
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
          image={imgUrl}
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
