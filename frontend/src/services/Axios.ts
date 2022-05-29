import axios, { AxiosInstance, AxiosRequestConfig, Method } from 'axios';
import IRequestParams from '../interfaces/commons/IRequestParams';
import IRequestAdapter from '../interfaces/adapters/IRequestAdapter';
import IResponseParamas from '../interfaces/commons/IResponseParamas';
import Exception from '../commons/Exception';
import CONSTANTS from '../commons/Constants';

class AxiosService implements IRequestAdapter {
  private request: AxiosInstance;

  constructor() {
    this.request = axios;
  }

  async execute(params: IRequestParams): Promise<IResponseParamas> {
    try {
      const requestConfig: AxiosRequestConfig = {
        baseURL: params?.baseUrl,
        data: params?.body,
        url: params?.path,
        params: params?.queryString,
        method: <Method>params?.method,
        headers: params?.headers,
      };
      const responseParams: IResponseParamas = await this.sendRequest(requestConfig);
      return responseParams;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  private async sendRequest(requestParams: AxiosRequestConfig): Promise<IResponseParamas> {
    try {
      const { status, statusText, data } = await this.request(requestParams);

      return AxiosService.normalizeToResponseParams(status, statusText, data);
    } catch (error) {
      if (error && error.isAxiosError()) {
        throw new Exception({
          error: error.response,
          message: error.message,
          statusCode: error.response.status,
          type: CONSTANTS.EXCEPTIONS.DEFAULT,
        });
      }

      throw error;
    }
  }

  private static normalizeToResponseParams(status: number, statusText: string, data: any): IResponseParamas {
    const responseParams: IResponseParamas = {
      data,
      statusText,
      statusCode: status,
    };
    return responseParams;
  }
}

export default new AxiosService();
