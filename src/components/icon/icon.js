import styled from "styled-components";

const IconContainer = ({ className, id, onClick, ...props }) => (
	<div className={className} onClick={onClick} {...props}>
		<i className={`fa ${id}`} aria-hidden="true"></i>
	</div>
);

export const Icon = styled(IconContainer)`
	font-size: ${({ size = "24px" }) => size};
	margin: ${({ margin = "0" }) => margin};
	color: ${({ disabled }) => (disabled ? "#ccc" : "#000")};

	&:hover {
		cursor: ${({ onClick }) => (onClick ? "pointer" : "default")};
	}
`;
