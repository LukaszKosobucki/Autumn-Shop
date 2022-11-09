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
import { formData } from "../../utils/formsUtils/formDataFinalize";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { dataContext } from "../../ContextProvider";

const FinalizeForm = () => {
  const { register, formState } = useFormContext();
  const { user, userCredentials } = useContext(dataContext);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const returnDefaultValue = (name: string): string => {
    const plchldr = userCredentials[name];
    return plchldr;
  };
  useEffect(() => {
    ((Object.keys(userCredentials).length > 0 && user) ||
      (Object.keys(userCredentials).length === 0 && !user)) &&
      setIsLoading(true);
  }, [userCredentials]);
  return (
    <Grid
      sx={{
        width: "100%",
        pb: "1rem",
      }}
    >
      {!user && (
        <Grid
          sx={{
            justifyContent: "space-around",
            flexDirection: "row",
            width: "100%",
            pb: "1rem",
          }}
        >
          <Button component={Link} to="/profile">
            <Typography color="primary" variant="caption">
              Register
            </Typography>
          </Button>
          <Button component={Link} to="/profile">
            <Typography color="primary" variant="caption">
              Login
            </Typography>
          </Button>
        </Grid>
      )}

      <Grid
        sx={{
          bgcolor: styles.colorAutumnLight100,
          minWidth: "26rem",
          p: "2.5rem",
        }}
      >
        {isLoading &&
          formData.map((input) => (
            <FormControl key={input.name} data-testid="formField">
              <InputLabel color="primary" htmlFor={input.name}>
                {input.name}
              </InputLabel>
              <Input
                id={input.name}
                color="primary"
                defaultValue={returnDefaultValue(input.name.toLowerCase())}
                {...register(input.name.toLowerCase(), {
                  pattern: input.pattern,
                  minLength: input.minLength,
                  maxLength: input.maxLength,
                  required: input.required,
                })}
              />
              {formState.errors[input.name.toLowerCase()] && (
                <Typography
                  data-testid="formError"
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
