import * as Yup from "yup";

export const signupSchema = Yup.object().shape({
  userName: Yup.string().required("Username is required"),
  email: Yup.string()
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|org|ru|net|edu|gov|io|co|us)$/,
      "Please enter a valid email with a common domain"
    )
    .required("Email is required"),
  password: Yup.string()
    .min(5, "Password must be at least 5 characters long")
    .required("Password is required"),
});

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|org|ru|net|edu|gov|io|co|us)$/,
      "Please enter a valid email with a common domain"
    )
    .required("Email is required"),
  password: Yup.string()
    .min(5, "Password must be at least 5 characters long")
    .required("Password is required"),
});
