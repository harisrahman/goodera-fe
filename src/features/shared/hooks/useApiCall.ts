import { useState, useEffect } from "react";
import { apiRequest } from "utils/api";

type UseApiCall = {
	apiUrl: string;
	reqData?: any;
	initDataValue: any;
};

export const useApiCall = (params: UseApiCall) => {
	const { apiUrl, reqData, initDataValue } = params;
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState(initDataValue);
	const [isFetchedOnce, setIsFetchedOnce] = useState(false);

	const fetchData = async () => {
		setLoading(true);
		const response = await apiRequest({
			apiUrl,
			data: reqData,
		});
		const { data: resData = initDataValue } = response;
		setData(resData);
		setIsFetchedOnce(true);
		setLoading(false);
	};

	useEffect(() => {
		fetchData();
	}, []);

	return { data, loading, isFetchedOnce };
};
