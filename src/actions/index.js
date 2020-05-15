export const navigate = (path) => {
	//console.log("executou actions navigate");
	//console.log(path);

	return {
		type: 'NAVIGATE',
		path
	};
};
