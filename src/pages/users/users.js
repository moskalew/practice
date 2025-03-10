import { useEffect, useState } from "react";
import { Content, H2 } from "../../components";
import { UserRow, TableRow } from "./components";
import { useServerRequest } from "../../hooks";
import styled from "styled-components";

const UsersContainer = ({ className }) => {
	const [users, setUsers] = useState([]);
	const [roles, setRoles] = useState([]);
	const [errorMessage, setErrorMessage] = useState(null);

	const requestServer = useServerRequest();
	// console.log(requestServer);
	useEffect(() => {
		// console.log("useEffect сработал!");
		Promise.all([requestServer("fetchUsers"), requestServer("fetchRoles")])
			.then(([usersRes, rolesRes]) => {
				console.log("Ответ сервера:", usersRes, rolesRes);

				if (usersRes.error || rolesRes.error) {
					setErrorMessage(usersRes.error || rolesRes.error);
					return;
				}

				setUsers(usersRes.res);
				setRoles(rolesRes.res);
			})
			.catch((error) => {
				console.error("Ошибка запроса:", error);
				setErrorMessage("Ошибка загрузки данных");
			});
	}, [requestServer]);

	return (
		<div className={className}>
			<Content error={errorMessage}>
				<H2>Пользователи</H2>

				<div>
					<TableRow>
						<div className="login-column">Логин</div>
						<div className="registered-at-column">
							Дата регистрации
						</div>
						<div className="role-column">Роль</div>
					</TableRow>

					{users.map(({ id, login, registredAt, roleId }) => (
						<UserRow
							key={id}
							login={login}
							registredAt={registredAt}
							roleId={roleId}
							roles={roles}
						/>
					))}
				</div>
			</Content>
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
