import { Router } from 'express';
import { AcademicDepartmentController } from './academic.department.controller';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicDepartmentValidation } from './academic.department.validation';

const router = Router();

router.post(
  '/create-academic-department',
  // validateRequest(
  //   AcademicDepartmentValidation.createAcademicDepartmentValidationSchema,
  // ),
  AcademicDepartmentController.createAcademicDepartment,
);
router.get('/', AcademicDepartmentController.getAllAcademicDepartment);
router.get(
  '/:academicDepartmentId',
  AcademicDepartmentController.getSingleAcademicDepartment,
);
router.patch(
  '/:academicDepartmentId',
  validateRequest(
    AcademicDepartmentValidation.updateAcademicDepartmentValidationSchema,
  ),
  AcademicDepartmentController.updateAcademicDepartment,
);

export const AcademicDepartmentRouters = router;
