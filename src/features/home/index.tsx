import styled from "styled-components";
import tw from "twin.macro";
import Container from "features/shared/components/styledComponents/Container";
import Search from "features/home/components/Search";

export default function Home() {
	return (
		<Container>
			<Search />
		</Container>
	);
}
