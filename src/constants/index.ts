import { Method } from "axios";

export const SERVICE_URL = process.env.REACT_APP_PROXY;

type ApiConfigType = { [key: string]: { url: string; method: Method } };

export const API_CONFIG: ApiConfigType = {
	jobs: {
		url: "/api/jobs",
		method: "GET",
	},
};

export const DATE_FORMAT = "DD MMM YYYY";

export const DATE_TIME_FORMAT = "DD MMM h:mm:ss A";
