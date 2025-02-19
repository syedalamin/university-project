import { Router } from 'express';
import { StudentRoutes } from '../modules/student/student.route';
import { UserRoutes } from '../modules/user/user.route';
import { AcademicSemesterRoutes } from '../modules/academicSemester/academic.semester.route';
import { AcademicFacultyRoutes } from '../modules/academicFaculty/academic.faculty.route';
import { AcademicDepartmentRouters } from '../modules/academicDepartment/academic.department.route';
const router = Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/students',
    route: StudentRoutes,
  },
  {
    path: '/academic-semesters',
    route: AcademicSemesterRoutes,
  },
  {
    path: '/academic-faculties',
    route: AcademicFacultyRoutes,
  },
  {
    path: '/academic-departments',
    route: AcademicDepartmentRouters,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
