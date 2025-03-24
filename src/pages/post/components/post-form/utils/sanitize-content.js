export const sanizeContent = (content) =>
	content
		.replaceAll("<div><br></div>", "\\n")
		.replaceAll("<div>", "\\n")
		.replaceAll("</div>", "");
