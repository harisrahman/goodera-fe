import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import styled from "styled-components";
import tw from "twin.macro";

type PropsType = {
	type?: "button" | "submit";
	title: string;
	children?: React.ReactNode;
	className?: string;
	disabled?: boolean;
	loading?: boolean;
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function Button({
	type = "button",
	title,
	className = "",
	disabled = false,
	loading = false,
	children,
	onClick,
}: PropsType) {
	return (
		<TButton
			type={type}
			disabled={disabled || loading}
			className={className}
			onClick={onClick}
		>
			{title}
			{children}
			{loading && (
				<AiOutlineLoading3Quarters className="ml-3 animate-spin" />
			)}
		</TButton>
	);
}

const TButton = styled.button`
	${tw`
		inline-flex
		items-center
		justify-center
		transition-colors
		duration-300
		py-3
		px-8
		font-bold
		focus:ring
		disabled:opacity-70
		disabled:cursor-not-allowed


		text-white
		
		bg-red-400
		focus:ring-red-300
		hover:bg-red-400
		active:bg-red-600
		rounded-lg
	`}
`;
