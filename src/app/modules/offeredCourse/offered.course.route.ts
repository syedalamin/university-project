import express from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { CourseOfferedValidation } from './offered.course.validation'
import { OfferedCourseController } from './offered.course.controller'

const route = express.Router()

route.post('/create-offered-course', validateRequest(CourseOfferedValidation.createOfferedCourseValidationSchema), OfferedCourseController.createOfferedCourse)


route.patch('/:offeredCourseId',
    validateRequest(CourseOfferedValidation.updateOfferedCourseValidationSchema),
    OfferedCourseController.updateOfferedCourses
)


export const OfferedCourseRoutes =  route