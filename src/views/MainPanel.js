import { Header, Panel } from '@enact/moonstone/Panels';
import kind from '@enact/core/kind';
import PropTypes from 'prop-types';
import React from 'react';

import Nav from '../components/Nav';
import Body from '../components/Body';

import css from './MainPanel.module.less';

const sections = ['Movies', 'TV Shows'];

//TODO: ao voltar, restabelecer a mesma seção. Está sempre voltando para Movies.

const MainPanel = kind({

	name: 'MainPanel',

	propTypes: {
		sectionID: PropTypes.number,
		itemId: PropTypes.string,
		onSelectItem: PropTypes.func,
		onChangeSection: PropTypes.func
	},

	defaultProps: {

	},

	handlers: {

	},

	computed: {

	},

	render: ({ sectionID, itemID, onChangeSection, onSelectItem, ...rest }) => {
		console.log(`MainPanel - entrou no render: sectionID=${sectionID}, itemID=${itemID}`);
		//delete rest.section;
		return (
			<div className={css.mainView}>
				<Panel {...rest}>
					<Header type="compact" title="Kodi2WebOS">
						<Nav sections={sections} onChangeSection={onChangeSection} defaultSelected={sectionID} />
					</Header>
					<Body sectionID={sectionID} selectedItemID={itemID} onSelect={onSelectItem} />
				</Panel>
			</div>
		)
	}
});

export default MainPanel;

/**
class MainPanel extends React.Component {
	static propTypes = {
		//next: PropTypes.string, NÃO RECEBE O NEXT. PODE VARIAR CONFORME A ROTA
		onSelectItem: PropTypes.func,
	}

	constructor(props) {
		super(props);
		this.state = { section: sections[0] };
		console.log("construtor MainPanel");
		//console.log(this.props);
	}

	static defaultProps = {

	};

	//https://pt-br.reactjs.org/docs/faq-state.html
	//console.log(this.state); setState é assincrono! não vai refletir a mudança imediatamente!!

	handleSectionChange = ({ data: section }) => {
		console.log("MainPanel - chamou o handleSectionChange: " + section);
		this.setState({ section: section });
	}

	render() {
		//clona o objeto
		const rest = Object.assign({}, this.props);
		const onSelectItem = rest.onSelectItem;

		const selectedSection = this.state.section;
		const onChange = this.handleSectionChange;

		console.log("MainPanel - entrou no render: " + selectedSection);

		return (
			<div className={css.mainView}>
				<Panel>
					<Header type="compact" title="Kodi2WebOS">
						<Nav sections={sections} onSectionChange={onChange} defaultSelected={0} />
					</Header>
					<Body section={selectedSection} onSelect={onSelectItem} />
				</Panel>
			</div>
		);
	}
}

<Scroller className={css.scroller}>
<Button onClick={onClickRouteA}>Movie 01 - onClick</Button>
<Button onClick={onClickRouteB}>TV Show 01 - onClick2</Button>
<ImageList imageitems={items} className={css.list}/>
<ImageList imageitems={tvshows} className={css.list}/>
</Scroller>
 */