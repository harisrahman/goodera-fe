import tw, { TwStyle } from "twin.macro";
import styled from "styled-components";

type ContainerSizeVariant = "xl" | "lg" | "sm";

type ContainerProps = {
	size?: ContainerSizeVariant;
};
const containerSizeVariants: Record<ContainerSizeVariant, TwStyle> = {
	xl: tw`max-w-screen-xl`,
	lg: tw`max-w-screen-lg`,
	sm: tw`max-w-screen-sm`,
};

export default styled.div<ContainerProps>(() => [
	tw`
		mx-auto
		py-5
		px-8
		min-h-full
	`,
	({ size = "xl" }) => containerSizeVariants[size],
]);
