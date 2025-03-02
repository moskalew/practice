// import { useDispatch } from "react-redux";
import { H2 } from "../../components";
import styled from "styled-components";
import { UserRow, TableRow } from "./components";
// import { ROLE } from "../../constants";

const UsersContainer = ({ className }) => {
	// const dispatch = useDispatch();
	const users = [];

	return (
		<div className={className}>
			<H2>Пользователи</H2>

			<div>
				<TableRow>
					<div className="login-column">Логин</div>
					<div className="registered-at-column">Дата регистрации</div>
					<div className="role-column">Роль</div>
				</TableRow>

				{users.map(({ id, login, registredAt, roleId }) => (
					<UserRow
						key={id}
						login={login}
						registredAt={registredAt}
						roleId={roleId}
					/>
				))}
			</div>
		</div>
	);
};

export const Users = styled(UsersContainer)`
	align-items: center;
	display: flex;
	flex-direction: column;
	margin: auto;
	width: 570px;
`;
