import styled from "styled-components";
import tw from "twin.macro";
import { JobPostingsType } from "features/home/Types";

type PropsType = {
	results: JobPostingsType;
};

export default function Results({ results }: PropsType) {
	return (
		<Root>
			{results.map((listing) => {
				<div>njsasj</div>;
			})}
		</Root>
	);
}

const Root = styled.div`
	${tw`
		mt-6
		flex
	`}
`;
