import { Error } from "../error/error";

export const Content = ({ children, error }) =>
	error ? <Error error={error} /> : children;
