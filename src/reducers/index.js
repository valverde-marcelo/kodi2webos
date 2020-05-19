import { combineReducers } from 'redux';

const init = {
	path: '/first',
	sectionID: 0,
	itemID: '#000000'
};

function path(state = init, action) {
	console.log('executou reducer');
	//console.log(state);
	//console.log(action);
	switch (action.type) {
		case 'NAVIGATE':
			return {
				path: action.path,
				sectionID: action.sectionID,
				itemID: action.itemID	
			};

		case 'CHANGE_SECTION':
			return {
				path: action.path,
				sectionID: action.sectionID
			};

		default:
			return state;
	}
}

const rootReducer = combineReducers({
	path
});

export default rootReducer;
