import { connect } from 'react-redux';

import { navigate } from '../actions';

/*
const mapStateToProps = ({path}) => ({
	path
});
*/

const mapStateToProps = (state) => {
	const { path } = state;
	return { path };
};

const mapDispatchToProps = (dispatch) => {
	return {
		onNavigate: ({ path }) => dispatch(navigate(path))
	};
};

const AppStateDecorator = connect(mapStateToProps, mapDispatchToProps);

export default AppStateDecorator;
export { AppStateDecorator };
