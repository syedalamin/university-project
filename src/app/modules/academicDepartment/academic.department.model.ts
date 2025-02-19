import { model, Schema } from 'mongoose';
import { TAcademicDepartment } from './academic.department.interface';
import status from 'http-status';
import AppError from '../../errors/AppError';

const academicDepartmentSchema = new Schema<TAcademicDepartment>({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  academicFaculty: {
    type: Schema.Types.ObjectId,
    ref: 'AcademicFaculty',
    required: true,
  },
});



academicDepartmentSchema.pre('save', async function (next) {
  const isDepartmentExists = await AcademicDepartment.findOne({
    name: this.name,
  });

  if (isDepartmentExists) {
    throw new AppError(status.NOT_FOUND,'This Department Already Exist');
  }
  next();
});

academicDepartmentSchema.pre('findOneAndUpdate', async function(next){
    const query = this.getQuery()
    const isDepartmentExists = await AcademicDepartment.findOne({_id: query._id})

    
  if (!isDepartmentExists) {
    throw new AppError(status.NOT_FOUND,'This Department dose not Exist');
  }
  next()

})

export const AcademicDepartment = model<TAcademicDepartment>(
  'AcademicDepartment',
  academicDepartmentSchema,
);
