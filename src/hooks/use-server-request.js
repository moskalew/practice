import { useCallback } from "react";
import { useSelector } from "react-redux";
import { selectUserSession } from "../selectors";
import { server } from "../bff";

export const useServerRequest = () => {
	const session = useSelector(selectUserSession);

	// const fullState = useSelector((state) => state);
	// console.log("Полный Redux store:", JSON.stringify(fullState, null, 2));

	return useCallback(
		(operation, ...params) => {
			const request = ["register", "authorise"].includes(operation)
				? params
				: [session, ...params];
			// console.log(`Вызов серверного метода: ${operation}`, { request });
			// console.log("Запрос:", operation, params);
			return server[operation](...request);
		},
		[session],
	);
};
