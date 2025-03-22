import { useSelector } from "react-redux";
import { Button } from "../button/button";
import styled from "styled-components";
import {
	selectModalIsOpen,
	selectModalOnConfirm,
	selectModalOnCancel,
	selectModalText,
} from "../../selectors";

const ModalContainer = ({ className }) => {
	const isOpen = useSelector(selectModalIsOpen);
	const onConfirm = useSelector(selectModalOnConfirm);
	const onCancel = useSelector(selectModalOnCancel);
	const text = useSelector(selectModalText);

	// if (!isOpen) {
	// 	return null;
	// }

	return (
		<div className={className}>
			<div className="overlay"></div>
			<div className="box">
				<h3>Удалить коммент?{text}</h3>
				<div className="buttons">
					<Button width="120px" onClick={onConfirm}>
						Да
					</Button>
					<Button width="120px" onClick={onCancel}>
						Отмена
					</Button>
				</div>
			</div>
		</div>
	);
};

export const Modal = styled(ModalContainer)`
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 20;

	& .overlay {
		position: absolute;
		background-color: rgba(0, 0, 0, 0.7);
		width: 100%;
		height: 100%;
	}

	& .box {
		position: relative;
		width: 400px;
		margin: 0 auto;
		z-index: 30;
		top: 50%;
		transform: translate(0, -50%);
		background-color: #fff;
		border: 2px solid #000;
		text-align: center;
		padding: 0 20px 20px;
	}

	& .buttons {
		display: flex;
		justify-content: center;
	}

	& .buttons button {
		margin: 0 5px;
	}
`;
