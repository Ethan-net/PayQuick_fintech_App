import Joi from "joi";

export const registerSchema = Joi.object({
  username: Joi.string().alphanum().min(5).max(10).required(), // Ensures only letters and numbers
  email: Joi.string().email().required(), // Ensures valid email format
  role: Joi.string().valid("user", "admin").default("user"), // Allows both user and admin
  password: Joi.string()
    .min(8)
    .max(12)
    .pattern(
      new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,12}$"
      )
    )
    .required()
    .messages({
      "string.pattern.base":
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.",
    }),
  phone: Joi.string()
    .length(11) // Ensures exactly 11 digits
    .pattern(/^[0-9]+$/) // Ensures only numbers
    .required()
    .messages({
      "string.pattern.base": "Phone number must contain only numbers.",
    }),
  transactionPin: Joi.string()
    .length(4) // Ensures exactly 4 digits
    .pattern(/^[0-9]+$/) // Ensures only numbers
    .required()
    .messages({
      "string.pattern.base": "Transaction PIN must contain only numbers.",
    }),
});
