import {
  FormControl,
  Input,
  InputLabel,
  Typography,
  Grid,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { FieldValues, useForm } from "react-hook-form";
import { dataContext } from "../../ContextProvider";
import styles from "../../palette.module.scss";
import { useNavigate } from "react-router-dom";
import { formForgotPassword } from "../../utils/formsUtils/formForgotPassword";

const ForgotPassword = () => {
  const { auth } = useContext(dataContext);
  const [firestoreError, setFirestoreError] = useState("");
  const navigate = useNavigate();
  const onSubmit = async (deliveryInformation: FieldValues): Promise<void> => {
    sendPasswordResetEmail(auth, deliveryInformation.email)
      .then(() => {
        // Password reset email sent!
        navigate("/", { replace: true });
      })
      .catch((e) => {
        setFirestoreError(e.message);
      });
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
        <Typography
          variant="body2"
          sx={{
            maxWidth: "20rem",
            mb: "0.75rem",
          }}
        >
          Enter an email on which you forgot the password. Link resetting your
          password will be send afterwads.
        </Typography>
        {formForgotPassword.map((input) => (
          <FormControl key={input.name} data-testid="formField">
            <InputLabel color="primary" htmlFor={input.name}>
              {input.name}
            </InputLabel>
            <Input
              id={input.name}
              color="primary"
              type={input.type}
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
        <Typography
          color="error"
          variant="body2"
          sx={{
            maxWidth: "20rem",
            mb: "0.75rem",
          }}
        >
          {firestoreError.toString()}
        </Typography>
        <Button type="submit">Send me a Link!</Button>
      </Grid>
    </form>
  );
};

export default ForgotPassword;
