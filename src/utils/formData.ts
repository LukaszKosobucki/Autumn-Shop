import { formDataType } from "../types/formDataType";
export const formData: formDataType[] = [
  {
    name: "Name",
    pattern: new RegExp(/^[a-zA-Z]*$/),
    minLength: 2,
    maxLength: 30,
    required: true,
    error: "Name should contain only letters from alphabet a-z",
  },
  {
    name: "Surname",
    pattern: new RegExp(/^[a-zA-Z]*$/),
    minLength: 2,
    maxLength: 30,
    required: true,
    error: "Surname should contain only letters from alphabet a-z",
  },
  {
    name: "Email",
    pattern: new RegExp(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ),
    minLength: 6,
    maxLength: 30,
    required: true,
    error: "Email should contain '@', with legit domain and name before '@'",
  },
  {
    name: "Phone",
    pattern: new RegExp(
      /(?<!\w)(\(?(\+|00)?48\)?)?[ -]?\d{3}[ -]?\d{3}[ -]?\d{3}(?!\w)/
    ),
    minLength: 9,
    maxLength: 13,
    required: true,
    error:
      "Phone number should contain only numbers with length of 9, and start with +xx / xx / (xx) / xx)",
  },
  {
    name: "ZipCode",
    pattern: new RegExp(/^([0-9]{2}-)?[0-9]{3}$/),
    minLength: 5,
    maxLength: 7,
    required: true,
    error: "Zip code should look like this 'xx-xxx'",
  },
  {
    name: "State",
    pattern: new RegExp(/^[a-zA-Z]*$/),
    minLength: 2,
    maxLength: 30,
    required: true,
    error: "State should contain only letters from alphabet a-z",
  },
  {
    name: "City",
    pattern: new RegExp(/^[a-zA-Z]*$/),
    minLength: 2,
    maxLength: 30,
    required: true,
    error: "City should contain only letters from alphabet a-z",
  },
];
