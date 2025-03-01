import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { SemesterRegistrationValidation } from './semester.registration.validation';
import { SemesterRegistrationControllers } from './semester.registration.controller';
const route = express.Router();

route.post(
  '/create-semester-registration',
  validateRequest(
    SemesterRegistrationValidation.createSemesterRegistrationValidationSchema,
  ),
  SemesterRegistrationControllers.createSemesterRegistration,
);
route.get('/', SemesterRegistrationControllers.getAllSemesterRegistrations);
route.get(
  '/:semesterRegistrationId',
  SemesterRegistrationControllers.getSingleSemesterRegistration,
);
route.patch(
  '/:semesterRegistrationId',
  validateRequest(
    SemesterRegistrationValidation.updateSemesterRegistrationValidationSchema,
  ),
  SemesterRegistrationControllers.updateSemesterRegistration,
);

export const SemesterRegistrationRoutes = route;
