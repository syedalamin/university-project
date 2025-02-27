import status from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { CourseServices } from './course.service';

const createCourse = catchAsync(async (req, res) => {
  const result = await CourseServices.createCourseIntoDB(req.body);
  sendResponse(res, {
    success: true,
    statusCode: status.OK,
    message: 'Course is created Successfully',
    data: result,
  });
});

const getAllCourses = catchAsync(async (req, res) => {
  const result = await CourseServices.getAllCoursesFromDB(req.query);

  sendResponse(res, {
    success: true,
    statusCode: status.OK,
    message: 'Course are retrieved Successfully',
    data: result,
  });
});

const getSingleCourse = catchAsync(async (req, res) => {
  const { courseId } = req.params;

  const result = await CourseServices.getSingleCourseFromDB(courseId);

  sendResponse(res, {
    success: true,
    statusCode: status.OK,
    message: 'Course is retrieved successfully',
    data: result,
  });
});
const deleteCourse = catchAsync(async (req, res) => {
  const { courseId } = req.params;

  const result = await CourseServices.deleteCourseIntoDB(courseId);

  sendResponse(res, {
    success: true,
    statusCode: status.OK,
    message: 'Course is deleted successfully',
    data: result,
  });
});

  const updateCourse = catchAsync(async (req, res) => {
    const { courseId } = req.params;
    const result = await CourseServices.updateCourseIntoDB(courseId, req.body)
    sendResponse(res, {
      success: true,
      statusCode: status.OK,
      message: 'Course is updated successfully',
      data: result,
    });
  });
  const assignFaculties = catchAsync(async (req, res) => {
    const { courseId } = req.params;
    const {faculties} = req.body
    const result = await CourseServices.assignFacultiesWithCourseIntoDB(courseId, faculties)
    sendResponse(res, {
      success: true,
      statusCode: status.OK,
      message: 'Assign Faculties  successfully',
      data: result,
    });
  });
  const removeFaculties = catchAsync(async (req, res) => {
    const { courseId } = req.params;
    const {faculties} = req.body
    const result = await CourseServices.removeFacultiesWithCourseIntoDB(courseId, faculties)
    sendResponse(res, {
      success: true,
      statusCode: status.OK,
      message: 'remove Faculties  successfully',
      data: result,
    });
  });

export const CourseControllers = {
  createCourse,
  getAllCourses,
  getSingleCourse,
  deleteCourse,
  updateCourse,
  assignFaculties,
  removeFaculties
};
