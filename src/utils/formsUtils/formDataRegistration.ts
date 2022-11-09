import { formDataType } from "../../types/formDataType";
import { formData } from "./formDataFinalize";

export const formDataRegistration: formDataType[] = [
  ...formData,
  {
    name: "Password",
    pattern: new RegExp(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
    ),
    minLength: 8,
    maxLength: 34,
    required: true,
    error: "Password can not contain white spaces",
  },
];
