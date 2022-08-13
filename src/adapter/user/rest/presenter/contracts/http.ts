export type HttpResponse<T = any> = {
	statusCode: number;
	data: T;
};

export interface HttpRequest {
	statusCode: number;
  body?: any
}


export const CREATED = (data: any): HttpResponse => ({
	statusCode: 201,
	data,
});

export const serverError = (error: Error): HttpResponse => ({
	statusCode: 500,
	data: error.stack,
});
