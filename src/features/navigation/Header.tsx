import { NavLink } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";
import { FaBriefcase } from "react-icons/fa";
import Container from "features/shared/components/styledComponents/Container";

export default function Header() {
	return (
		<Root>
			<Container>
				<div className="flex justify-between">
					<div className="flex">
						<Logo>
							<FaBriefcase />
							<h3 className="ml-2 font-bold">JobHunt</h3>
						</Logo>
						<LinksContainer>
							<SingleLink>
								<Link
									exact={true}
									to="/"
									activeClassName="active"
								>
									Find Jobs
								</Link>
							</SingleLink>
							<SingleLink>
								<Link
									exact={true}
									to="/upskill"
									activeClassName="active"
								>
									Upskill Yourself
								</Link>
							</SingleLink>
						</LinksContainer>
					</div>
					<div className="flex">
						<LinksContainer>
							<SingleLink>
								<Link
									exact={true}
									to="/post-job"
									activeClassName="active"
								>
									Post a Job
								</Link>
							</SingleLink>
							<SingleLink>
								<Link
									exact={true}
									to="/login"
									activeClassName="active"
								>
									Sign In
								</Link>
							</SingleLink>
						</LinksContainer>
					</div>
				</div>
				<div className="py-20">
					<h1 className="text-4xl font-bold">Find Your Dream Job</h1>
					<p className="text-lg mt-1">
						Browse through thousands of full-time or part-time jobs
						near you
					</p>
				</div>
			</Container>
		</Root>
	);
}

const Root = styled.header`
	${tw`
		text-white
	`}

	background: linear-gradient(274.83deg, #5DB0DF 0.58%, #5D7ADF 74.3%);
`;

const LinksContainer = styled.ul`
	${tw`
	`}
`;

const SingleLink = styled.li`
	${tw`
		inline
		px-4
	`}
`;

const Link = styled(NavLink)`
	${tw`
		text-white
		pb-2
	`}

	position: relative;

	&.active::after {
		content: "";
		transform: translateX(-50%);
		${tw`
			absolute
			left-1/2
			bottom-0
			w-1/2
			border-b-2
			border-solid
			border-white
		`}
	}
`;

const Logo = styled.div`
	${tw`
		flex
		items-center
		text-white
		mr-10
	`}
`;
