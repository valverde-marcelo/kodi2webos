import { combineReducers } from 'redux';

function path(state = {path:'/first'}, action) {
	console.log('executou reducer');
	console.log(state);
	console.log(action);
	switch (action.type) {
		case 'NAVIGATE':
			return {
				index: action.index,
				path: action.path
			};
		default:
			return state;
	}
}

const rootReducer = combineReducers({
	path
});

export default rootReducer;
