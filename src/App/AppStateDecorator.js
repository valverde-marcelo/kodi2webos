import { connect } from 'react-redux';

import { navigate } from '../actions';

/*
* sintaxe original:
const mapStateToProps = ({path}) => ({
	path
});
*/

const mapStateToProps = (state) => {
	console.log("executou o mapStateToProps");
	//console.log(state);
	const { path, index } = state.path;
	console.log(path, index);
	return { path, index };
};

const mapDispatchToProps = (dispatch) => {
	console.log("executou o mapDispatchToProps");
	return {
		onNavigate: (object) => {
			const { path, index, type } = object;
			return dispatch(navigate(path, index, type));
		}
	};
};

const AppStateDecorator = connect(mapStateToProps, mapDispatchToProps);

export default AppStateDecorator;
export { AppStateDecorator };
