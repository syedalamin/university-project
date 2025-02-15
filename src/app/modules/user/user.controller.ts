import { UserService } from './user.service';
import sendResponse from '../../utils/sendResponse';
import status from 'http-status';
import catchAsync from '../../utils/catchAsync';

const createStudent = catchAsync(async (req, res, next) => {
  const { password, student: studentData } = req.body;

  const result = await UserService.createStudentIntoDB(password, studentData);

  sendResponse(res, {
    success: true,
    statusCode: status.OK,
    message: 'Student is created successfully',
    data: result,
  });
});

export const UserController = {
  createStudent,
};
