import { z } from 'zod';

const userValidationSchema = z.object({
  password: z
    .string({
        invalid_type_error: 'Password Must be string'
    })
    .max(20, { message: 'Password can not be more then 20 characters' }).optional(),
});

export const UserValidation = {
  userValidationSchema,
};
