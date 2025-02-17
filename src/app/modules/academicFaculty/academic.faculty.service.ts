import { TAcademicFaculty } from './academic.faculty.interface';
import { AcademicFaculty } from './academic.faculty.model';

const createAcademicFacultyIntoDB = async (payload: TAcademicFaculty) => {
  const result = AcademicFaculty.create(payload);
  return result;
};

const getAllAcademicFacultyFromDB = async () => {
  const result = await AcademicFaculty.find();
  return result;
};
const getSingleAcademicFacultyFromDB = async (id: string) => {
  const result = await AcademicFaculty.findById(id);
  return result;
};
const updateAcademicFacultyIntoDB = async (
  id: string,
  payload: Partial<TAcademicFaculty>,
) => {
  const result = await AcademicFaculty.findByIdAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

export const AcademicFacultyServices = {
  createAcademicFacultyIntoDB,
  getAllAcademicFacultyFromDB,
  getSingleAcademicFacultyFromDB,
  updateAcademicFacultyIntoDB,
};
