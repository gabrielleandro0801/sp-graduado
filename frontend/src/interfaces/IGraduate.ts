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
  course: {
    name: string;
    semesters: number;
    period: string;
    modality: string;
    category: string;
    college: {
      id: number;
      name: string;
      city: string;
    };
  };
}
