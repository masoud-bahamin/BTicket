import * as yup from "yup";

export const signupValidationSchema = yup.object({
  email: yup.string().min(4).max(50).email().required(),
  password: yup.string().min(4).max(50).required(),
  rePassword: yup
    .string()
    .min(4)
    .max(50)
    .required("confirm password is required")
    .oneOf([yup.ref("password")], "Passwords must match"),
});
