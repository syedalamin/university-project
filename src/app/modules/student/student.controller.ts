import { StudentServices } from './student.service';
import sendResponse from '../../utils/sendResponse';
import status from 'http-status';
import catchAsync from '../../utils/catchAsync';



const getAllStudents = catchAsync(async (req, res) => {
  const result = await StudentServices.getAllStudentsFromDB(req.query);
  sendResponse(res, {
    success: true,
    statusCode: status.OK,
    message: 'Students are retrieved Successfully',
    data: result,
  });
});
const getSingleStudent = catchAsync(async (req, res) => {
  const { studentId } = req.params;
  const result = await StudentServices.getSingleStudentFromDB(studentId);
  sendResponse(res, {
    success: true,
    statusCode: status.OK,
    message: 'Students is retrieved Successfully',
    data: result,
  });
});
const deleteStudent = catchAsync(async (req, res) => {
  const { studentId } = req.params;
  const result = await StudentServices.deleteStudentFromDB(studentId);

  sendResponse(res, {
    success: true,
    statusCode: status.OK,
    message: 'Students is deleted Successfully',
    data: result,
  });
});
const updateStudent = catchAsync(async (req, res) => {
  const { studentId } = req.params;
  const { student} = req.body;
  const result = await StudentServices.updateStudentFromDB(studentId, student);

  
  sendResponse(res, {
    success: true,
    statusCode: status.OK,
    message: 'Students is updated Successfully',
    data: result,
  });
});

export const StudentControllers = {
  getAllStudents,
  getSingleStudent,
  deleteStudent,
  updateStudent
};
