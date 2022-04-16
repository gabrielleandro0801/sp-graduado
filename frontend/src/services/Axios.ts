import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import IRequestParams from '../interfaces/commons/IRequestParams';
import IRequestAdapter from '../interfaces/adapters/IRequestAdapter';
import IResponseParamas from '../interfaces/commons/IResponseParamas';

export default class AxiosService implements IRequestAdapter {
	private request: AxiosInstance;

	constructor() {
		this.request = axios;
	}

	async execute(params: IRequestParams): Promise<IResponseParamas> {
		try {
			return null;
		} catch (error) {
			throw new Error('not implemented yet');
		}
	}

	private async sendRequest(requestParams: AxiosRequestConfig): Promise<IResponseParamas> {
		try {
			return null;
		} catch (error) {
			throw new Error('not implemented yet');
		}
	}
}
