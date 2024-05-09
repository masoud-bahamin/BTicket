import Validator from "fastest-validator";

const v = new Validator();

const registerServerSchema = {
  email: { type: "string", min: 6, required: true },
  password: { type: "string", min: 6, required: true },
};

export const registerValidation = v.compile(registerServerSchema);

export const messageFormValidation = v.compile({
  email: { type: "email", min: 5, requierd: true },
  message: { type: "string", min: 5, requierd: true },
});
