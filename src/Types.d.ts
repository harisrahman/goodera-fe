export type StringMapObj = { [key: string]: string };

export type GenericObject = { [key: string]: any };

export type ApiResponse = {
	meta: {
		success: booelan;
		code: number;
		msg: string;
	};
	data?: any;
};
