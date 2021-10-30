import axios from "axios";
import { API_CONFIG, SERVICE_URL } from "constants/index";
import { GenericObject, StringMapObj } from "Types";

type BuildRequestDataType = {
	apiUrl: keyof typeof API_CONFIG;
	headers?: StringMapObj;
	data?: GenericObject;
};

const buildRequestData = async (options: BuildRequestDataType) => {
	const { apiUrl, headers = {}, data } = options;
	const { url, method } = API_CONFIG[apiUrl];
	const reqUrl = `${SERVICE_URL}${url}`;
	const reqHeaders = {
		"Content-Type": "application/json",
		...headers,
	};

	return {
		url: reqUrl,
		headers: reqHeaders,
		data: JSON.stringify(data),
		method,
	};
};

export const apiRequest = async (options: BuildRequestDataType) => {
	const reqData = await buildRequestData(options);
	try {
		const response = await axios(reqData);
		const jsonResponse = await response.data;
		const { meta = {} } = jsonResponse;
		const { success = false, msg = "" } = meta;
		const { headers = {} } = response;

		return jsonResponse;
	} catch (err) {
		if (axios.isAxiosError(err)) {
			const { response: errResponse } = err;
			if (errResponse) {
				const { data = {} } = errResponse;
				const { meta = {} } = data;
				const { msg = "", code } = meta;
				alert(msg || "Something Went Wrong");
				return errResponse;
			}
		}
		alert("Something went wrong");
	}
	return { meta: { success: false } };
};
