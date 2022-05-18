export default interface IPerson {
  type: 'Aluno' | 'Padrinho' | undefined;
  name: string;
  documentNumber: string;
  birthDate: string;
  contacts: {
    phoneNumber: string;
    email: string;
  };
  password: string;
  confirmPassword: string;
  termsAndCoditionsAccepted?: boolean;
}
