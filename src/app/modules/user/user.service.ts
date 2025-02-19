import status from 'http-status';
import config from '../../config';
import AppError from '../../errors/AppError';
import { AcademicSemester } from '../academicSemester/academic.semester.model';
import { TStudent } from '../student/student.interface';
import { Student } from '../student/student.model';
import { TUser } from './user.interface';
import { User } from './user.model';
import { generateStudentId } from './user.utils';
import mongoose from 'mongoose';

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
  // create a user object
  const userData: Partial<TUser> = {};

  // if password is not given use default password
  userData.password = password || (config.default_password as string);
  // set student role
  userData.role = 'student';

  // year semester code , 4 digit number

  // find academic semester info
  const admissionSemester = await AcademicSemester.findById(
    studentData.admissionSemester,
  );

  if (!admissionSemester) {
    throw new AppError(status.NOT_FOUND, 'Did not found');
  }

  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    // manually generated id
    userData.id = await generateStudentId(admissionSemester);

    // create a user

    const newUser = await User.create([userData], { session });

    // create a student
    if (!newUser.length) {
      throw new AppError(status.BAD_REQUEST, 'Fail To create User');
    }

    // set id , _id as user
    studentData.id = newUser[0].id;
    studentData.user = newUser[0]._id;
    const newStudent = await Student.create([studentData], { session });

    if (!newStudent) {
      throw new AppError(status.BAD_REQUEST, 'Fail To create Student');
    }

    await session.commitTransaction();
    await session.endSession();

    return newStudent;
  } catch (err) {
    await session.abortTransaction();
    await session.endSession();
    throw new AppError(status.BAD_REQUEST, 'Failed to create student');
  }
};

export const UserService = {
  createStudentIntoDB,
};
