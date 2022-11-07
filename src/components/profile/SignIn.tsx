import { signInWithEmailAndPassword } from "firebase/auth";
import { useContext } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { dataContext } from "../../ContextProvider";

const SignIn = () => {
  const { auth } = useContext(dataContext);
  const onSubmit = (deliveryInformation: FieldValues): void => {
    signInWithEmailAndPassword(
      auth,
      deliveryInformation.email,
      deliveryInformation.password
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
        placeholder="email"
        id="email"
        {...register("email", {
          required: true,
        })}
      />

      <input
        type="text"
        placeholder="password"
        id="password"
        {...register("password", {
          required: true,
        })}
      />
      <input type="submit" />
    </form>
  );
};

export default SignIn;
