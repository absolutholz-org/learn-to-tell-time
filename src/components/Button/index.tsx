import React, { ReactNode } from "react";
import styled from "styled-components";

type ButtonEvent = React.MouseEvent<HTMLButtonElement>;

const StyledButton = styled.button`
	/* https://material-ui.com/components/buttons/ */
	align-items: center;
	background: var(--highlight);
	border: 0;
	border-radius: 4px;
	box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
		0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
	color: var(--on-highlight);
	display: inline-flex;
	font: inherit;
	font-size: 1rem;
	font-weight: 500;
	justify-content: center;
	letter-spacing: 0.02857em;
	line-height: 1.75;
	margin: 0;
	padding: 0.5rem 1.5rem 0.6rem;
	position: relative;
	text-decoration: none;
	text-transform: uppercase;
	transition-delay: 0s;
	transition-duration: 250ms;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	transition-property: background, box-shadow, border, opacity;
	user-select: none;
	vertical-align: middle;
	-webkit-tap-highlight-color: transparent;

	&:hover,
	&:focus {
		box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
			0px 4px 5px 0px rgba(0, 0, 0, 0.14),
			0px 1px 10px 0px rgba(0, 0, 0, 0.12);
	}

	&:disabled {
		box-shadow: 0;
		cursor: not-allowed;
		opacity: 0.75;
		pointer-events: none;
	}
`;

interface IButtonProps {
	children: ReactNode;
	onClick?: (event: ButtonEvent) => void;
	type?: "button" | "submit";
	disabled?: boolean;
}

export const Button = ({
	children,
	onClick,
	type = "button",
	disabled = false,
}: IButtonProps) => {
	return (
		<StyledButton disabled={disabled} onClick={onClick} type={type}>
			{children}
		</StyledButton>
	);
};

export default Button;
