export interface IStatus {
	response: IResponse;
	status: number;
	options: IOption;
	message: string;
	name: string;
}

export interface IOption {}

export interface IResponse {
	statusCode: number;
	message: string;
	error?: string;
}

//Response mi converrà usarlo su response:?
