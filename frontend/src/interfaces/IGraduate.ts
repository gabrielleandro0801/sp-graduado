import ICollege from './ICollege';
import ICourse from './ICourse';

export default interface IGraduate {
  name: string;
  documentNumber: string;
  birthDate: string;
  incomeFamily: string;
  contacts: {
    phoneNumber: string;
    email: string;
  };
  password: string;
  confirmPassword: string;
  about: string;
  course: ICourse;
  college: ICollege;
}
