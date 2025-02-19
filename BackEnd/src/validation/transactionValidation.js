import Joi from "joi";

export const transactionSchema = Joi.object({
  senderAccountNumber: Joi.string().length(10).required(),
  receiverAccountNumber: Joi.string().length(10).required(),
  amount: Joi.number().min(100).required(),
  transactionPin: Joi.string().length(4).required(),
  description: Joi.string().max(100).optional(),
});
