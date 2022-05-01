import ILoginForm from '../interfaces/ILoginForm';
import CONSTANTS from '../commons/Constants';

export default class LoginFormValidation {
  static async validate(formValue: ILoginForm): Promise<boolean> {
    const validationArr: Array<boolean> = await Promise.all([
      LoginFormValidation.validateEmail(formValue.email),
      LoginFormValidation.validatePassword(formValue.password),
    ]);

    return validationArr.every((value) => value);
  }

  private static validateEmail(email: string): boolean {
    if (!new RegExp(CONSTANTS.REGEX.EMAIL).test(email)) {
      return false;
    }

    return true;
  }

  private static validatePassword(password: string): boolean {
    if (!new RegExp(CONSTANTS.REGEX.PASSWORD).test(password)) {
      return false;
    }

    return true;
  }
}
