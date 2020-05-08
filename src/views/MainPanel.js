import {Header, Panel} from '@enact/moonstone/Panels';
//import kind from '@enact/core/kind';
import PropTypes from 'prop-types';
import React from 'react';

import Nav from '../components/Nav';
import Body from '../components/Body';

import css from './MainPanel.module.less';

const sections = ['Movies', 'TV Shows'];

class MainPanel extends React.Component {
	static propTypes = {
		next: PropTypes.string,
	}
	
	constructor(props) {
		super(props);
		this.state = {section: sections[0]};
	}

	handleSectionChange = ({data: section}) => {
		this.setState({section});
	}

	render(){
		//clona o objeto
		const rest = Object.assign({}, this.props);

		const selectedSection = this.state.section;
		const onChange = this.handleSectionChange;	

		return (
			<div className={css.mainView}>
			<Panel>
				<Header type="compact" title="Kodi2WebOS">
					<Nav sections={sections} onSectionChange={onChange}	defaultSelected={0}/>
				</Header>
				<Body {...rest} selectedSection={selectedSection}/>
			</Panel>
			</div>
		);
	}
}

/*
const MainPanel = kind({
	name: 'MainPanel',

	propTypes: {
		next: PropTypes.string,
		onClickRouteA: PropTypes.func,
		onClickRouteB: PropTypes.func,
		//title: PropTypes.string
	},

	computed: {
		//text: ({next}) => `To ${next} Panel`
	},

	render: ({onClickRouteA, onClickRouteB, ...rest}) => {
		delete rest.next;
		return (
			<div className={css.mainView}>
			<Panel {...rest}>
				<Header type="compact" title="Kodi2WebOS">
					<Nav sections={sections} onSectionChange={onChange}	defaultSelected={0}/>
				</Header>
				<div className={css.content}>
					<Scroller className={css.scroller}>
						<div className={css.sidebar}/>
						<Button onClick={onClickRouteA}>Movie 01 - onClick</Button>
						<Button onClick={onClickRouteB}>TV Show 01 - onClick2</Button>
						<ImageList imageitems={movies} onClick={onClickRouteA} className={css.list}/>
						<ImageList imageitems={tvshows} onClick={onClickRouteB} className={css.list}/>
					</Scroller>
				</div>
			</Panel>
			</div>
		);
	}
});
*/
export default MainPanel;

/**
<Scroller className={css.scroller}>
<Button onClick={onClickRouteA}>Movie 01 - onClick</Button>
<Button onClick={onClickRouteB}>TV Show 01 - onClick2</Button>
<ImageList imageitems={items} className={css.list}/>
<ImageList imageitems={tvshows} className={css.list}/>
</Scroller>
 */