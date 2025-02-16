import express from 'express';
import { UserController } from './user.controller';

import { StudentValidation } from '../student/student.validation';
import validateRequest from '../../middlewares/validateRequest';

const router = express.Router();


router.post(
  '/create-student',
  validateRequest(StudentValidation.createStudentValidationSchema),
  UserController.createStudent,
);

export const UserRoutes = router;
