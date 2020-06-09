import { connect } from 'react-redux';
import { navigate, changeSection } from '../actions';
import debug from '../utils/debug';

const logger = debug('App:AppStateDecorator');

/*
* sintaxe original:
const mapStateToProps = ({path}) => ({
	path
});
*/

const mapStateToProps = (state) => {
	logger("executou mapStateToProps");
	const { path, sectionID, itemID } = state.path;
	return { path, sectionID, itemID };
};

const mapDispatchToProps = (dispatch) => {
	logger("executou o mapDispatchToProps");
	return {
		onNavigate: (object) => {
			//console.log(object);
			const { path, sectionID, itemID } = object;
			return dispatch(navigate(path, sectionID, itemID));
		},
		onChangeSection: (object) => {
			const { path, sectionID } = object;
			return dispatch(changeSection(path, sectionID));
		}
	};
};

const AppStateDecorator = connect(mapStateToProps, mapDispatchToProps);

export default AppStateDecorator;
export { AppStateDecorator };
