import IResponseParams from '../interfaces/commons/IResponseParamas';
import IRequestAdapter from '../interfaces/adapters/IRequestAdapter';
import AxiosService from '../services/Axios';
import CONSTANTS from '../commons/Constants';
import CONFIG from '../config';
import LoginModel from '../models/Login';
import ILogin from '../interfaces/ILogin';
import Exception from '../commons/Exception';

class LoginEntity {
  private readonly requestService: IRequestAdapter;

  constructor() {
    this.requestService = AxiosService;
  }

  async singIn(login: ILogin): Promise<IResponseParams> {
    try {
      const requestBody = LoginModel.normalizeToBackendBody(login);
      const loginResponse: IResponseParams = await this.requestService.execute({
        baseUrl: String(CONFIG.BACKEND.URL),
        path: CONSTANTS.PATH.LOGIN.POST,
        body: requestBody,
        headers: LoginEntity.getDefaultHeaders(),
        method: CONSTANTS.METHOD.POST,
      });

      return loginResponse;
    } catch (error) {
      if (error instanceof Exception) {
        throw error;
      }

      throw new Exception({
        error,
        message: CONSTANTS.MESSAGES.DEFAULT[500],
        statusCode: CONSTANTS.HTTP.STATUS.INTERNAL_SERVER_ERROR,
        type: CONSTANTS.EXCEPTIONS.UNEXPECTED,
      });
    }
  }

  private static getDefaultHeaders(): any {
    return {
      'Content-Type': 'application/json',
    };
  }
}

export default new LoginEntity();
