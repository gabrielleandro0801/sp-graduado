import IGodfather from '../interfaces/IGodfather';

export default class GodfatherModel {
  static getInitialValues(): IGodfather {
    const initialValues: IGodfather = {
      name: '',
      documentNumber: '',
      birthDate: new Date().toISOString(),
      monthlyIncome: 0,
      contacts: {
        phoneNumber: '',
        email: '',
      },
      password: '',
      confirmPassword: '',
      reasonWhy: '',
      termsAndCoditionsAccepted: false,
      type: '',
    };
    return initialValues;
  }

  static normalizeToBackendBody(godfather: IGodfather): any {
    return {
      name: godfather.name,
      password: godfather.password,
      contact: {
        email: godfather.contacts.email,
        cellphoneNumber: godfather.contacts.phoneNumber,
      },
      monthlyIncome: godfather.monthlyIncome,
      documentNumber: godfather.documentNumber,
      birthDate: godfather.birthDate,
      reasonsWhy: godfather.reasonWhy,
    };
  }
}
