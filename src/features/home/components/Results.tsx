import styled from "styled-components";
import tw from "twin.macro";
import { JobPostingsType } from "features/home/Types";
import Card from "features/shared/components/styledComponents/Card";

type PropsType = {
	results: JobPostingsType;
};

export default function Results({ results }: PropsType) {
	console.log(results);

	return (
		<Root>
			{results.map((listing) => (
				<Card key={listing.id} className="flex flex-1 max-w-1/2">
					<img src={listing.image} className="w-40" alt="" />
					<div className="ml-5">
						<h4 className="text-xl font-bold mb-4">
							{listing.title}
						</h4>
						<p>{listing.description}</p>
						<div className="text-right mt-4">
							<button className="text-red-400 border-2 border-red-400 px-3 py-2 rounded-lg">
								View Details
							</button>
						</div>
					</div>
				</Card>
			))}
		</Root>
	);
}

const Root = styled.div`
	${tw`
		mt-6
		flex
	`}
`;
