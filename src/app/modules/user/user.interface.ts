export type TUser = {
  id: string;
  password: string;
  needsPasswordsChange: boolean;
  role: 'admin' | 'student' | 'faculty';
  status: 'in-progress' | 'blocked';
  isDeleted: boolean;
};

