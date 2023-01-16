import { FormControl, Input, InputLabel, Typography } from "@mui/material";
import { useContext } from "react";
import { useFormContext } from "react-hook-form";
import { dataContext } from "../../ContextProvider";
import { formDataType } from "../../types/formDataType";

const FinalizeFormInput = ({ input }: { input: formDataType }) => {
  const { register, formState } = useFormContext();
  const { userCredentials } = useContext(dataContext);

  return (
    <FormControl data-testid="formField">
      <InputLabel color="primary" htmlFor={input.name}>
        {input.name}
      </InputLabel>
      <Input
        id={input.name}
        color="primary"
        disabled={input.disable}
        defaultValue={userCredentials[input.name.toLowerCase()]}
        type={input.type}
        onKeyDown={input.onKeyDown}
        autoComplete={input.autocomplete}
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
  );
};

export default FinalizeFormInput;
