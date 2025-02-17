import { string, z } from 'zod';

const createAcademicFacultyValidationSchema = z.object({
  body: z.object({
    name: string({invalid_type_error: 'Academic Faculty must be string'}),
  }),
});
const updateAcademicFacultyValidationSchema = z.object({
  body: z.object({
    name: string().optional(),
  }),
});

export const AcademicFacultyValidationSchema = {
    createAcademicFacultyValidationSchema,
    updateAcademicFacultyValidationSchema
}


