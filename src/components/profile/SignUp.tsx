import { createUserWithEmailAndPassword } from "firebase/auth";
import { useContext } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { dataContext } from "../../ContextProvider";

const SignUp = () => {
  const { auth } = useContext(dataContext);

  const onSubmit = (deliveryInformation: FieldValues): void => {
    createUserWithEmailAndPassword(
      auth,
      deliveryInformation.emailReg,
      deliveryInformation.passwordReg
    );
  };

  const { register, handleSubmit } = useForm();
  return (
    <form
      style={{ display: "flex", flexDirection: "column" }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        type="text"
        placeholder="emailReg"
        id="emailReg"
        {...register("emailReg", {
          required: true,
        })}
      />

      <input
        type="text"
        placeholder="passwordReg"
        id="passwordReg"
        {...register("passwordReg", {
          required: true,
        })}
      />
      <input type="submit" />
    </form>
  );
};

export default SignUp;
