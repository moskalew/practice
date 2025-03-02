import { useDispatch } from "react-redux";
import { Icon } from "../../../../components";
import { TableRow } from "../table-row/table-row";
import styled from "styled-components";
// import { ROLE } from "../../../../constants";

const UserRowContainer = ({
	className,
	login,
	registredAt,
	roleId: userRoleId,
}) => {
	const dispatch = useDispatch();

	const roles = [];

	const onRoleChange = () => {};
	return (
		<div className={className}>
			<TableRow>
				<div className="login-column">{login}</div>
				<div className="registered-at-column">{registredAt}</div>

				<div className="role-column">
					<select value={userRoleId} onChange={onRoleChange}>
						{roles.map(({ id: roleId, name: roleName }) => (
							<option value={roleId}>{roleName}</option>
						))}
					</select>

					<Icon
						id="fa-floppy-o"
						margin="0 0 0 10px"
						onclick={() => dispatch(/* TODO */)}
					/>
				</div>
			</TableRow>
			<Icon
				id="fa-trash-o"
				margin="0 0 0 10px"
				onclick={() => dispatch(/* TODO */)}
			/>
		</div>
	);
};

export const UserRow = styled(UserRowContainer)``;
