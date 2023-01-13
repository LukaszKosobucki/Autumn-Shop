export const formForgotPassword = [
  {
    name: "Email",
    pattern: new RegExp(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ),
    minLength: 6,
    maxLength: 30,
    required: true,
    type: "text",
    error: "Email should contain '@', with legit domain and name before '@'",
  },
];
