import {
  Grid,
  Button,
  FormControl,
  Input,
  InputLabel,
  Typography,
} from "@mui/material";
import { UseFormRegister, FieldValues } from "react-hook-form";
import styles from "../../palette.module.scss";

const FinalizeForm = ({
  register,
}: {
  register: UseFormRegister<FieldValues>;
}) => {
  const formData = [
    "Name",
    "Surname",
    "Email",
    "Phone",
    "ZipCode",
    "State",
    "City",
  ];

  return (
    <Grid
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "flext-start",
        alignItems: "flex-start",
        position: "relative",
        flexDirection: "column",
        width: "100%",
        pb: 2,
      }}
    >
      <Grid
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          alignItems: "flex-start",
          position: "relative",
          flexDirection: "row",
          width: "100%",
          pb: 2,
        }}
      >
        <Button>
          <Typography color="primary" variant="caption">
            Register
          </Typography>
        </Button>
        <Button>
          <Typography color="primary" variant="caption">
            Login
          </Typography>
        </Button>
      </Grid>

      <Grid
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "flext-start",
          alignItems: "flex-start",
          position: "relative",
          flexDirection: "column",
          bgcolor: styles.colorAutumnLight100,
          minWidth: 320,
          p: 5,
        }}
      >
        {formData.map((text) => (
          <FormControl required key={text}>
            <InputLabel htmlFor={text}>{text}</InputLabel>
            <Input
              id={text}
              color="primary"
              sx={{ mb: 1.5, minWidth: 18.75 }}
              {...register(text.toLowerCase())}
            />
          </FormControl>
        ))}
      </Grid>
    </Grid>
  );
};

export default FinalizeForm;
