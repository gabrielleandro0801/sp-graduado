import * as YUP from 'yup';

import CONSTANTS from '../commons/Constants';

export default class GraduateRegisterFormValidation {
  static getValidationSchema(): any[] {
    const schemaSteps = [
      YUP.object({
        type: YUP.string()
          .required(CONSTANTS.MESSAGES.VALIDATION.TYPE)
          .oneOf([CONSTANTS.REGISTER_TYPE.GODFATHER, CONSTANTS.REGISTER_TYPE.GRADUATE]),
      }),
      YUP.object({
        name: YUP.string().min(10).required(CONSTANTS.MESSAGES.VALIDATION.NAME),
        documentNumber: YUP.string()
          .min(11, CONSTANTS.MESSAGES.VALIDATION.DOCUMENT_NUMBER.CPF)
          .max(11, CONSTANTS.MESSAGES.VALIDATION.DOCUMENT_NUMBER.CPF)
          .matches(CONSTANTS.REGEX.DOCUMENT.CPF, CONSTANTS.MESSAGES.VALIDATION.DOCUMENT_NUMBER.CPF)
          .required(CONSTANTS.MESSAGES.VALIDATION.DOCUMENT_NUMBER.CPF),
        birthDate: YUP.date().required(CONSTANTS.MESSAGES.VALIDATION.BIRTH_DATE),
        incomeFamily: YUP.string()
          .min(CONSTANTS.GRADUATE.MIN_INCOME_FAMILY, CONSTANTS.MESSAGES.VALIDATION.INCOME_FAMILY)
          .max(CONSTANTS.GRADUATE.MAX_INCOME_FAMILY, CONSTANTS.MESSAGES.VALIDATION.INCOME_FAMILY)
          .matches(CONSTANTS.REGEX.FLOAT, CONSTANTS.MESSAGES.VALIDATION.INCOME_FAMILY)
          .required(CONSTANTS.MESSAGES.VALIDATION.INCOME_FAMILY),
        contacts: YUP.object({
          phoneNumber: YUP.string()
            .min(10, CONSTANTS.MESSAGES.VALIDATION.CONTACTS.PHONE_NUMBER)
            .max(11, CONSTANTS.MESSAGES.VALIDATION.CONTACTS.PHONE_NUMBER)
            .matches(CONSTANTS.REGEX.PHONE, CONSTANTS.MESSAGES.VALIDATION.CONTACTS.PHONE_NUMBER)
            .required(CONSTANTS.MESSAGES.VALIDATION.CONTACTS.PHONE_NUMBER),
          email: YUP.string().email(CONSTANTS.MESSAGES.VALIDATION.EMAIL).required(CONSTANTS.MESSAGES.VALIDATION.EMAIL),
        }),
        about: YUP.string().required(CONSTANTS.MESSAGES.VALIDATION.ABOUT).min(250, CONSTANTS.MESSAGES.VALIDATION.ABOUT),
        password: YUP.string()
          .matches(CONSTANTS.REGEX.PASSWORD, CONSTANTS.MESSAGES.VALIDATION.PASSWORD)
          .required(CONSTANTS.MESSAGES.VALIDATION.PASSWORD),
        confirmPassword: YUP.string().oneOf(
          [YUP.ref('password'), null],
          CONSTANTS.MESSAGES.VALIDATION.CONFIRMATION_PASSWORD,
        ),
        course: YUP.object({
          name: YUP.string().required(CONSTANTS.MESSAGES.VALIDATION.COURSE),
          semesters: YUP.number().required(CONSTANTS.MESSAGES.VALIDATION.COURSE),
          period: YUP.string().required(CONSTANTS.MESSAGES.VALIDATION.COURSE),
          modality: YUP.string().required(CONSTANTS.MESSAGES.VALIDATION.COURSE),
          category: YUP.string().required(CONSTANTS.MESSAGES.VALIDATION.COURSE),
        }).optional(),
        college: YUP.object({
          id: YUP.number().required(CONSTANTS.MESSAGES.VALIDATION.COLLEGE),
          name: YUP.string().required(CONSTANTS.MESSAGES.VALIDATION.COLLEGE),
          city: YUP.string().required(CONSTANTS.MESSAGES.VALIDATION.COLLEGE),
        }).required(CONSTANTS.MESSAGES.VALIDATION.COLLEGE),
        type: YUP.string()
          .required(CONSTANTS.MESSAGES.VALIDATION.TYPE)
          .oneOf([CONSTANTS.REGISTER_TYPE.GODFATHER, CONSTANTS.REGISTER_TYPE.GRADUATE]),
        termsAndCoditionsAccepted: YUP.boolean()
          .default(false)
          .required(CONSTANTS.MESSAGES.VALIDATION.TERMS_AND_CONDITIONS),
      }),
      YUP.object({
        termsAndCoditionsAccepted: YUP.boolean()
          .default(false)
          .required(CONSTANTS.MESSAGES.VALIDATION.TERMS_AND_CONDITIONS),
      }),
    ];
    return schemaSteps;
  }
}
