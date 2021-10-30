import { useState, useEffect } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Container from "features/shared/components/styledComponents/Container";
import Search from "features/home/components/Search";
import Results from "features/home/components/Results";
import { JobPostingsType } from "features/home/Types";
import { useApiCall } from "features/shared/hooks/useApiCall";

export default function Home() {
	const [results, setResults] = useState<JobPostingsType>([]);
	const { data, loading } = useApiCall({
		apiUrl: "jobs",
		initDataValue: {},
	});

	return (
		<Container>
			<Search />
			<Results results={results} />
		</Container>
	);
}
