import { Router } from 'express';
import { AcademicFacultyControllers } from './academic.faculty.controller';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicFacultyValidationSchema } from './academic.faculty.validation';

const router = Router();

router.post(
  '/create-academic-faculty',
  validateRequest(
    AcademicFacultyValidationSchema.createAcademicFacultyValidationSchema,
  ),
  AcademicFacultyControllers.createAcademicFaculty,
);

router.get('/', AcademicFacultyControllers.getAllAcademicFaculty);
router.get(
  '/:academicFacultyId',
  AcademicFacultyControllers.getSingleAcademicFaculty,
);

router.patch(
  '/:academicFacultyId',
  validateRequest(
    AcademicFacultyValidationSchema.updateAcademicFacultyValidationSchema,
  ),
  AcademicFacultyControllers.updateAcademicFaculty,
);

export const AcademicFacultyRoutes = router;
