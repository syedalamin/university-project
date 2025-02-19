import status from 'http-status';
import AppError from '../../errors/AppError';
import { academicSemesterNameCodeMapper } from './academic.semester.constant';
import { TAcademicSemester } from './academic.semester.interface';
import { AcademicSemester } from './academic.semester.model';

const createAcademicSemesterIntoDB = async (payload: TAcademicSemester) => {
  // semester name === semester code
  if (academicSemesterNameCodeMapper[payload.name] !== payload.code) {
   throw new AppError(status.NOT_FOUND,'Invalid Semester Code');
  }

  const result = await AcademicSemester.create(payload);
  return result;
};
const getAllAcademicSemesterFromDB = async () => {
  const result = await AcademicSemester.find();
  return result;
};

const getSingleAcademicSemesterFromDB = async (id: string) => {
  const result = await AcademicSemester.findById(id);
  return result;
};

const updateAcademicSemesterIntoDB = async (
  id: string,
  payload: Partial<TAcademicSemester>,
) => {
  if (
    payload.name &&
    payload.code &&
    academicSemesterNameCodeMapper[payload.name] !== payload.code
  ) {
   throw new AppError(status.NOT_FOUND,'Data is not found');
  }

  const result = await AcademicSemester.findByIdAndUpdate(
    { _id: id },
    payload,
    { new: true },
  );
  return result;
};

export const AcademicSemesterServices = {
  createAcademicSemesterIntoDB,
  getAllAcademicSemesterFromDB,
  getSingleAcademicSemesterFromDB,
  updateAcademicSemesterIntoDB
};
