import { z } from 'zod';

const userNameValidationSchema = z.object({
  firstName: z
    .string()
    .min(1, 'First Name is required')
    .max(20, 'Name cannot be more than 20 characters')
    .trim(),
  middleName: z.string().optional(),
  lastName: z
    .string()
    .min(1, 'Last Name is required')
    .max(20, 'Name cannot be more than 20 characters')
    .trim(),
});

const guardianValidationSchema = z.object({
  fatherName: z.string().min(1, 'Father Name is required'),
  fatherOccupation: z.string().min(1, 'Father Occupation is required'),
  fatherContactNo: z.string().min(1, 'Father Contact No is required'),
  motherName: z.string().min(1, 'Mother Name is required'),
  motherOccupation: z.string().min(1, 'Mother Occupation is required'),
  motherContactNo: z.string().min(1, 'Mother Contact No is required'),
});

const localGuardianValidationSchema = z.object({
  name: z.string().min(1, 'Local Guardian Name is required'),
  occupation: z.string().min(1, 'Local Guardian Occupation is required'),
  contactNo: z.string().min(1, 'Local Guardian Contact No is required'),
  address: z.string().min(1, 'Local Guardian Contact No is required'),
});

const createStudentValidationSchema = z.object({
  body: z.object({
    password: z.string().max(20).optional(),
    student: z.object({
      name: userNameValidationSchema,
      gender: z.enum(['male', 'female', 'other']),
      dateOfBirth: z.string().optional(),
      email: z.string().email('Invalid email format'),
      contactNo: z.string().min(1, 'Contact No is required'),
      emergencyContactNo: z.string().min(1, 'Emergency Contact No is required'),
      bloodGroup: z
        .enum(['A+', 'B+', 'A-', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
        .optional(),
      presentAddress: z.string().min(1, 'Present Address is required'),
      permanentAddress: z.string().min(1, 'Permanent Address is required'),
      guardian: guardianValidationSchema,
      localGuardian: localGuardianValidationSchema,
      profileImage: z.string().optional(),
    }),
  }),
});

export const StudentValidation = {
  createStudentValidationSchema,
};
