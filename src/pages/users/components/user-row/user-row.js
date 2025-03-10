import { useState } from "react";
import { useDispatch } from "react-redux";
import { Icon } from "../../../../components";
import { TableRow } from "../table-row/table-row";
import styled from "styled-components";
// import { ROLE } from "../../../../constants";

const UserRowContainer = ({
	className,
	login,
	registeredAt,
	roleId: userRoleId,
	roles,
}) => {
	const [selectedRoleId, setSelectedRoleId] = useState(userRoleId);
	const dispatch = useDispatch();

	const onRoleChange = ({ target }) => {
		setSelectedRoleId(Number(target.value));
	};

	const isSaveButtonDisabled = selectedRoleId === userRoleId;

	return (
		<div className={className}>
			<TableRow border={true}>
				<div className="login-column">{login}</div>
				<div className="registered-at-column">{registeredAt}</div>
				<div className="role-column">
					<select value={selectedRoleId} onChange={onRoleChange}>
						{roles.map(({ id: roleId, name: roleName }) => (
							<option key={roleId} value={roleId}>
								{roleName}
							</option>
						))}
					</select>
					<Icon
						id="fa-floppy-o"
						margin="0 0 0 10px"
						disabled={isSaveButtonDisabled}
						onСlick={() => dispatch(/* TODO */)}
					/>
				</div>
			</TableRow>
			<Icon
				id="fa-trash-o"
				margin="0 0 0 10px"
				onСlick={() => dispatch(/* TODO */)}
			/>
		</div>
	);
};

export const UserRow = styled(UserRowContainer)`
	display: flex;

	margin-top: 10px;

	& select {
		padding: 0 5px;
		font-size: 16px;
	}

	& .save-role-button {
		width: 21px;
		height: 32px;
		margin: 0 0 0 10px;
	}
`;
