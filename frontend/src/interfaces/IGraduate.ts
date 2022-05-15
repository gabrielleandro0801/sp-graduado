import ICollege from './ICollege';
import ICourse from './ICourse';
import IPerson from './IPerson';

export default interface IGraduate extends IPerson {
  incomeFamily: string;
  about: string;
  course: ICourse;
  college: ICollege;
}
