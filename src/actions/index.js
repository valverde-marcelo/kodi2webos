export const navigate = (path, index, typeMedia) => {
	console.log("executou actions navigate");
	// console.log(path);
	// console.log(index);
	// console.log(typeMedia);

	return {
		type: 'NAVIGATE',
		path,
		index,
		typeMedia
	};
};
