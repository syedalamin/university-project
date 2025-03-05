import status from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { OfferedCourseServices } from './offered.course.service';

const createOfferedCourse = catchAsync(async (req, res) => {
  const result = await OfferedCourseServices.createOfferedCourseIntoDB(
    req.body,
  );

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Offered Course is created successfully',
    data: result,
  });
});

const getAllOfferedCourses = catchAsync(async (req, res) => {
  const result = await OfferedCourseServices.getAllOfferedCourseFromDB();

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Offered Course are retrieved successfully',
    data: result,
  });
});

const getSingleOfferedCourses = catchAsync(async (req, res) => {
  const result = await OfferedCourseServices.getSingleOfferedCourseFromDB();

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Offered Course is retrieved successfully',
    data: result,
  });
});

const updateOfferedCourses = catchAsync(async (req, res) => {
  const { offeredCourseId } = req.params;
  const result = await OfferedCourseServices.updateOfferedCourseIntoDB(offeredCourseId, req.body);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Offered Course is retrieved successfully',
    data: result,
  });
});

export const OfferedCourseController = {
  createOfferedCourse,
  getAllOfferedCourses,
  getSingleOfferedCourses,
  updateOfferedCourses,
};
