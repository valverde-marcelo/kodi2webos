import PropTypes from 'prop-types';
import React from 'react';
import {Row, Cell} from '@enact/ui/Layout';

import Scroller from '@enact/ui/Scroller/Scroller';
import ImageList from '../components/ImageList';

import css from './Body.module.less';

import {createImageItens} from '../utils/factory';


class Body extends React.Component {
	
	static propTypes = {
		selectedSection: PropTypes.string.isRequired,
		onClickRouteA: PropTypes.func,
		onClickRouteB: PropTypes.func,
	};

	constructor (props) {
		super(props);
		this.state = {selectedSection: this.props.selectedSection};
	}

	componentWillReceiveProps (nextProps) {
		//const nextCity = this.props.cities[nextProps.selectedCountry][0];
		//this.setState({city: nextCity});
	}

	//handleCityChange = ({data: city}) => this.setState({city})

	handleOnClickRouteA = () => {
		this.props.onClickRouteA();
	}

	handleOnClickRouteB = () => {
		this.props.onClickRouteB();
	}

	render () {
		const selectedSection = this.state.selectedSection;
		let items, onClickRoute;

		if(selectedSection == "Movies") {
			onClickRoute = this.handleOnClickRouteA;
			items = createImageItens('movies', 5);
		} else if(selectedSection == "TV Shows"){
			onClickRoute = this.handleOnClickRouteB;
			items = createImageItens('tvshows', 5);
		}

		return (
			<Row className={css.body}>
				<Cell size="100%">
				<Scroller className={css.scroller}>
						<div className={css.sidebar}/>
						<ImageList items={items} onClick={onClickRoute} className={css.list}/>
					</Scroller>
				</Cell>
			</Row>
		);
	}
}

export default Body;
