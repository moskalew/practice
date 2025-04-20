import PropTypes from "prop-types";
import { ROLE } from "../bff/constants";

const ROLE_ID = PropTypes.oneOfType([
	PropTypes.oneOf(Object.values(ROLE)), // числа
	PropTypes.oneOf(Object.values(ROLE).map(String)), // строки
]);

export const PROP_TYPE = {
	ROLE_ID,
	ROLE: PropTypes.shape({
		id: ROLE_ID.isRequired,
		name: PropTypes.string.isRequired,
	}),
	ERROR: PropTypes.oneOfType([PropTypes.string, PropTypes.exact(null)]),
	COMMENT: PropTypes.shape({
		id: PropTypes.number.isRequired,
		author: PropTypes.string.isRequired,
		content: PropTypes.string.isRequired,
		publishedAt: PropTypes.string.isRequired,
	}),
	POST: PropTypes.shape({
		id: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		imageUrl: PropTypes.string.isRequired,
		content: PropTypes.string.isRequired,
		publishedAt: PropTypes.string.isRequired,
	}),
};
