export default interface IRequestParams {
    baseUrl: string;
    path: string;
    body: any;
    headers: any;
    method: string;
    queryString?: any;
}
