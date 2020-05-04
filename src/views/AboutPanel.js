import BodyText from '@enact/moonstone/BodyText';
import Button from '@enact/moonstone/Button';
import kind from '@enact/core/kind';
import {Panel, Header} from '@enact/moonstone/Panels';
import PropTypes from 'prop-types';
import React from 'react';
import Scroller from '@enact/moonstone/Scroller';

const example =
`<RoutablePanels {...rest} arranger={SlideLeftArranger} onBack={onNavigate} path={path}>
	<Route path="first" component={AboutPanel} title="First" onClick={onSecondPanel}>
		<Route path="second" component={MainPanel} title="Second" onClick={onFourthPanel} />
		<Route path="third" component={MainPanel} title="Third" onClick={onFirstPanel}>
			<Route path="fourth" component={MainPanel} title="Fouth" onClick={onThirdPanel} />
		</Route>
	</Route>
</RoutablePanels>`;

const AboutPanel = kind({
	name: 'AboutPanel',

	propTypes: {
		onClick: PropTypes.func,
		title: PropTypes.string
	},

	render: ({title, onClick, ...rest}) => (
		<Panel {...rest}>
			<Header title={title}>
				<Button onClick={onClick}>To Second Panel</Button>
			</Header>

			<Scroller>
				<BodyText>
					This pattern illustrates the use of the <code>Routable</code> HOC to navigate a
					hierarchal tree of <code>Panel</code>s.
				</BodyText>

				<BodyText>
					A <code>Routable</code> panels accepts <code>Route</code>s as children which
					themselves can contain child <code>Route</code>s. Each <code>Route</code> must have
					a <code>path</code> property indicating its name within the subtree and a
					<code>component</code> property indicating the component to render when that path is
					active. Any additional props will be passed onto the <code>component</code>.
				</BodyText>

				<BodyText>
					Instead of setting the <code>index</code> of the active panel, you set
					the <code>path</code> (e.g. <code>&#39;/first/second&#39;</code>) and <code>Routable</code>
					derives the correct index. When using breadcrumbs or the back/ESC key, the user is
					routed back up the path until it reaches the top-most panel.
				</BodyText>

				<pre><code>{example}</code></pre>
			</Scroller>
		</Panel>
	)
});

export default AboutPanel;
