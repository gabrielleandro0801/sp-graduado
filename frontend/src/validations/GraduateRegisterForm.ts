import * as YUP from 'yup';

import IGraduate from '../interfaces/IGraduate';
import CONSTANTS from '../commons/Constants';

export default class GraduateRegisterFormValidation {
  static getValidationSchema(): any {
    const schema = YUP.object({
      name: YUP.string().min(10).required(),
      documentNumber: YUP.string().min(11).max(11).matches(CONSTANTS.REGEX.DOCUMENT.CPF).required(),
      birthDate: YUP.string().matches(CONSTANTS.REGEX.DATE).required(),
      incomeFamily: YUP.string()
        .min(CONSTANTS.GRADUATE.MIN_INCOME_FAMILY)
        .max(CONSTANTS.GRADUATE.MAX_INCOME_FAMILY)
        .matches(CONSTANTS.REGEX.FLOAT)
        .required(),
      contacts: YUP.object({
        phoneNumber: YUP.string().min(10).max(11).matches(CONSTANTS.REGEX.PHONE).required(),
        email: YUP.string().email().required(),
      }),
      about: YUP.string().required(),
      password: YUP.string().matches(CONSTANTS.REGEX.PASSWORD).required(),
      confirmPassword: YUP.string().oneOf([YUP.ref('password'), null]),
      course: YUP.object({
        name: YUP.string().required(),
        semesters: YUP.number().required(),
        period: YUP.string().required(),
        modality: YUP.string().required(),
        category: YUP.string().required(),
        college: YUP.object({
          id: YUP.number().required(),
          name: YUP.string().required(),
          city: YUP.string().required(),
        }),
      }),
    });
    return schema;
  }

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
      course: {
        name: '',
        semesters: 0,
        period: '',
        modality: '',
        category: '',
        college: {
          id: 0,
          name: '',
          city: '',
        },
      },
    };
    return initialValues;
  }
}
