import IGraduate from '../interfaces/IGraduate';
import CollegeModel from './College';
import CourseModel from './Course';

export default class GraduateModel {
  static getInitialValues(): IGraduate {
    const initialValues: IGraduate = {
      name: '',
      documentNumber: '',
      birthDate: '',
      incomeFamily: '0.0',
      contacts: {
        phoneNumber: '',
        email: '',
      },
      password: '',
      confirmPassword: '',
      about: '',
      course: CourseModel.getInitialValues(),
      college: CollegeModel.getInitialValues(),
      termsAndCoditionsAccepted: false,
      type: undefined,
    };
    return initialValues;
  }
}
