import {
  Grid,
  Button,
  FormControl,
  Input,
  InputLabel,
  Typography,
} from "@mui/material";
import { useFormContext } from "react-hook-form";
import styles from "../../palette.module.scss";
import { formData } from "../../utils/formData";

const FinalizeForm = () => {
  const { register, formState } = useFormContext();
  return (
    <Grid
      sx={{
        width: "100%",
        pb: "1rem",
      }}
    >
      <Grid
        sx={{
          justifyContent: "space-around",
          flexDirection: "row",
          width: "100%",
          pb: "1rem",
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
          bgcolor: styles.colorAutumnLight100,
          minWidth: "26rem",
          p: "2.5rem",
        }}
      >
        {formData.map((input) => (
          <FormControl key={input.name}>
            <InputLabel color="primary" htmlFor={input.name}>
              {input.name}
            </InputLabel>
            <Input
              id={input.name}
              color="primary"
              sx={{
                mb: "0.75rem",
                minWidth: "20rem",
              }}
              {...register(input.name.toLowerCase(), {
                pattern: input.pattern,
                minLength: input.minLength,
                maxLength: input.maxLength,
                required: input.required,
              })}
            />
            {formState.errors[input.name.toLowerCase()] && (
              <Typography
                color="error"
                variant="body2"
                sx={{
                  maxWidth: "20rem",
                  mb: "0.75rem",
                }}
              >
                {input.error}
              </Typography>
            )}
          </FormControl>
        ))}
      </Grid>
    </Grid>
  );
};

export default FinalizeForm;
