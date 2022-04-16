import Constants from './Constants';
import Exception from './Exception';

export default class ExceptionHandler {
	static throw(
		error: Error | any,
		message = Constants.MESSAGES.DEFAULT[500],
		statusCode = Constants.HTTP.STATUS.INTERNAL_SERVER_ERROR,
		type = Constants.EXCEPTIONS.DEFAULT,
	): never {
		throw new Exception({
			error,
			message,
			statusCode,
			type,
		});
	}
}
