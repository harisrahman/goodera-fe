import styled from "styled-components";
import tw from "twin.macro";
import Button from "features/shared/components/Button";

export default function Search() {
	return (
		<Root>
			<TextInput type="text" placeholder="Job title or keyword" />
			<SelectInput>
				<SelectOption value="" hidden>
					Select location
				</SelectOption>
				<SelectOption value="">ansj</SelectOption>
				<SelectOption value="">hnax</SelectOption>
				<SelectOption value="">xxs</SelectOption>
			</SelectInput>
			<Button title="Search" className="flex-2" />
		</Root>
	);
}

const Root = styled.div`
	${tw`
		flex
		bg-white
		shadow-lg
		p-5
		rounded-3xl
		-mt-14
	`}
`;

const InputStyles = tw`
	bg-white
	flex-5
	mr-2
	border-none
	outline-none
`;

const TextInput = styled.input`
	${InputStyles}
`;

const SelectInput = styled.select`
	${InputStyles}
	${tw`
		text-gray-400
	`}
`;

const SelectOption = styled.option`
	${tw`
		text-black
	`}
`;
