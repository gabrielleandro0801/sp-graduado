import IResponseParams from '../interfaces/commons/IResponseParamas';
import IRequestAdapter from '../interfaces/adapters/IRequestAdapter';
import AxiosService from '../services/Axios';
import IGraduate from '../interfaces/IGraduate';
import GraduateModel from '../models/Graduate';
import CONFIG from '../config';
import CONSTANTS from '../commons/Constants';
import Exception from '../commons/Exception';

class GraduateEntity {
  private readonly requestService: IRequestAdapter;

  constructor() {
    this.requestService = AxiosService;
  }

  async create(graduate: IGraduate): Promise<IResponseParams> {
    try {
      const requestBody = GraduateModel.normalizeToBackendBody(graduate);
      const { data: graduateResponse }: IResponseParams = await this.requestService.execute({
        baseUrl: String(CONFIG.BACKEND.URL),
        path: CONSTANTS.PATH.STUDENDS.POST,
        body: requestBody,
        headers: GraduateEntity.getDefaultHeaders(),
        method: CONSTANTS.METHOD.POST,
      });

      const associationResponse: IResponseParams = await this.associateToCourse(
        graduateResponse.id,
        graduate.course.id,
      );

      return {
        data: { ...associationResponse.data, ...graduateResponse.data },
        statusCode: associationResponse.statusCode,
        statusText: associationResponse.statusText,
      };
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

  async getById(graduateId: number): Promise<IResponseParams> {
    try {
      const graduateResponse: IResponseParams = await this.requestService.execute({
        baseUrl: String(CONFIG.BACKEND.URL),
        path: CONSTANTS.PATH.STUDENDS.GET_BY_ID.replace('{studentId}', String(graduateId)),
        headers: GraduateEntity.getDefaultHeaders(),
        method: CONSTANTS.METHOD.POST,
      });
      return graduateResponse;
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

  private async associateToCourse(graduateId: number, courseId: number): Promise<IResponseParams> {
    return this.requestService.execute({
      baseUrl: String(CONFIG.BACKEND.URL),
      path: CONSTANTS.PATH.STUDENDS.PUT.replace('{studentId}', String(graduateId)),
      headers: GraduateEntity.getDefaultHeaders(),
      method: CONSTANTS.METHOD.PUT,
      queryString: { courseId },
    });
  }

  private static getDefaultHeaders(): any {
    return {
      'Content-Type': 'application/json',
    };
  }
}

export default new GraduateEntity();
