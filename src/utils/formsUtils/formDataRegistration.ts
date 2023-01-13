import { formDataType } from "../../types/formDataType";
import { formDataFinalizeForNotLoggedUsers } from "./formDataFinalizeForNotLoggedUsers";

export const formDataRegistration: formDataType[] = [
  ...formDataFinalizeForNotLoggedUsers,
  {
    name: "Password",
    pattern: new RegExp(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
    ),
    minLength: 8,
    maxLength: 34,
    required: true,
    error: "Password can not contain white spaces",
    disable: false,
    type: "password",
    autocomplete: "off",
  },
];
