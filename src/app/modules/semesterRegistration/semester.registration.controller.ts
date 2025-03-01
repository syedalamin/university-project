import status from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { SemesterRegistrationServices } from './semester.registration.service';

const createSemesterRegistration = catchAsync(async (req, res) => {
  const result =
    await SemesterRegistrationServices.createSemesterRegistrationIntoDB(
      req.body,
    );

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Semester Registration is created successfully',
    data: result,
  });
});


const getAllSemesterRegistrations = catchAsync(async (req, res) => {
  const result =
    await SemesterRegistrationServices.getAllSemesterRegistrationFromDB(
      req.query,
    );

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Semester Registration are retrieved successfully',
    data: result,
  });
});

const getSingleSemesterRegistration = catchAsync(async (req, res) => {
  const { semesterRegistrationId } = req.params;
  const result =
    await SemesterRegistrationServices.getSingleSemesterRegistrationFromDB(
      semesterRegistrationId,
    );

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Semester Registration is retrieved successfully',
    data: result,
  });
});


const updateSemesterRegistration = catchAsync(async (req, res) => {
  const { semesterRegistrationId } = req.params;
  const result =
    await SemesterRegistrationServices.updateSemesterRegistrationIntoDB( 
      semesterRegistrationId, req.body,
    );

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Semester Registration is update  successfully',
    data: result,
  });
});
export const SemesterRegistrationControllers = {
  createSemesterRegistration,
  getAllSemesterRegistrations,
  getSingleSemesterRegistration,
  updateSemesterRegistration
};
