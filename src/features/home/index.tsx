import styled from "styled-components";
import tw from "twin.macro";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Container from "features/shared/components/styledComponents/Container";
import Search from "features/home/components/Search";
import Results from "features/home/components/Results";
import { JobPostingsType } from "features/home/Types";
import { useApiCall } from "features/shared/hooks/useApiCall";

export default function Home() {
	const { data, loading } = useApiCall({
		apiUrl: "jobs",
		initDataValue: undefined,
	});

	return (
		<Container>
			<Search />
			{loading ? (
				<AiOutlineLoading3Quarters className="ml-3 animate-spin" />
			) : (
				<Results results={data} />
			)}
		</Container>
	);
}
