import {combineReducers} from 'redux';

function path (state = '/first', action) {
	//console.log('executou reducer');
	//console.log(action);
	switch (action.type) {
		case 'NAVIGATE':
			return action.path;
		default:
			return state;
	}
}

const rootReducer = combineReducers({
	path
});

export default rootReducer;
