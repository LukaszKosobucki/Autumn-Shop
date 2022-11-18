import {
  FormControl,
  Input,
  InputLabel,
  Typography,
  Grid,
  Button,
} from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useContext } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { dataContext } from "../../ContextProvider";
import { formDataLogin } from "../../utils/formsUtils/formDataLogin";
import styles from "../../palette.module.scss";

const SignIn = () => {
  const { auth, setIsLogged } = useContext(dataContext);
  const onSubmit = (deliveryInformation: FieldValues): void => {
    signInWithEmailAndPassword(
      auth,
      deliveryInformation.email,
      deliveryInformation.password
    );
    setIsLogged("loggedIn");
  };
  const { register, handleSubmit, formState } = useForm();
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid
        sx={{
          bgcolor: styles.colorAutumnLight100,
          minWidth: "26rem",
          p: "2.5rem",
          m: "1rem",
        }}
      >
        {formDataLogin.map((input) => (
          <FormControl key={input.name} data-testid="formField">
            <InputLabel color="primary" htmlFor={input.name}>
              {input.name}
            </InputLabel>
            <Input
              id={input.name}
              color="primary"
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
        <Button type="submit">Sign In!</Button>
      </Grid>
    </form>
  );
};

export default SignIn;
