import styled from "styled-components";

const ButtonCotainer = ({ children, className, width, ...props }) => {
	return (
		<button className={className} {...props}>
			{children}
		</button>
	);
};

export const Button = styled(ButtonCotainer)`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 18px;
	width: ${({ width = "100%" }) => width};
	height: 32px;
	border: 1px solid #000;
	background: #eee;

	&:hover {
		cursor: pointer;
	}
`;
