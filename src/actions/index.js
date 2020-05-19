export const navigate = (path, sectionID, itemID) => {
	console.log(`executou actions NAVIGATE: path=${path}, sectionID=${sectionID}, itemID=${itemID}`);
	return {
		type: 'NAVIGATE',
		path,
		sectionID,
		itemID,
	};
};

export const changeSection = (path, sectionID, itemID) => {
	console.log(`executou actions CHANGE_SECTION: path=${path}, sectionID=${sectionID}, itemID=${itemID}`);
	return {
		type: 'CHANGE_SECTION',
		path,
		sectionID,
		itemID,
	};
};
