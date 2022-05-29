import CONSTANTS from '../commons/Constants';

const { BACKEND, MESSAGES }: any = CONSTANTS;

export default class ErrorModel {
  static parseByMessage(errorMessage: string, statusCode: number, currentContext: string, method: string): string {
    const fromToList = BACKEND.ERROR_MESSAGES[currentContext];

    if (fromToList && fromToList[method]) {
      for (const fromTo of fromToList[method]) {
        if (fromTo.from === errorMessage) {
          return fromTo.to;
        }

        return fromToList.default;
      }
      return fromToList.default;
    }

    return this.parseByStatusCode(statusCode);
  }

  private static parseByStatusCode(statusCode: number): string {
    return MESSAGES.DEFAULT[statusCode] || MESSAGES.DEFAULT[500];
  }
}
