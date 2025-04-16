import { useEffect, useState, useMemo } from "react";
import { useSelector } from "react-redux";
import { PrivateContent, H2 } from "../../components";
import { UserRow, TableRow } from "./components";
import { useServerRequest } from "../../hooks";
import { selectUserRole } from "../../selectors";
import { checkAccess } from "../../utils";
import { ROLE } from "../../constants";
import styled from "styled-components";

const UsersContainer = ({ className }) => {
	const [users, setUsers] = useState([]);
	const [roles, setRoles] = useState([]);
	const [errorMessage, setErrorMessage] = useState(null);
	const [shouldUpdateUserList, setShouldUpdateUserList] = useState(false);
	const userRole = useSelector(selectUserRole);

	const requestServer = useServerRequest();

	useEffect(() => {
		if (!checkAccess([ROLE.ADMIN], userRole)) {
			return;
		}

		Promise.all([requestServer("fetchUsers"), requestServer("fetchRoles")])
			.then(([usersRes, rolesRes]) => {
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
	}, [requestServer, shouldUpdateUserList, userRole]);

	const filteredRoles = useMemo(() => {
		const guestRoleId = Number(ROLE.GUEST);
		const filtered = roles.filter(({ id }) => Number(id) !== guestRoleId);
		return filtered;
	}, [roles]);

	const onUserRemove = (userId) => {
		if (!checkAccess([ROLE.ADMIN], userRole)) {
			return;
		}
		requestServer("removeUser", userId).then(() => {
			setShouldUpdateUserList(!shouldUpdateUserList);
		});
	};

	return (
		<div className={className}>
			<PrivateContent access={[ROLE.ADMIN]} serverError={errorMessage}>
				<H2>Пользователи</H2>
				<div>
					<TableRow>
						<div className="login-column">Логин</div>
						<div className="registered-at-column">
							Дата регистрации
						</div>
						<div className="role-column">Роль</div>
					</TableRow>

					{users.map(({ id, login, registeredAt, roleId }) => (
						<UserRow
							key={id}
							id={id}
							login={login}
							registeredAt={registeredAt}
							roleId={roleId}
							roles={filteredRoles}
							onUserRemove={() => onUserRemove(id)}
						/>
					))}
				</div>
			</PrivateContent>
		</div>
	);
};

export const Users = styled(UsersContainer)`
	align-items: center;
	display: flex;
	flex-direction: column;
	margin: auto;
	width: 570px;
	font-size: 18px;
`;
