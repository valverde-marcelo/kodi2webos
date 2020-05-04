import PropTypes from 'prop-types';
import React from 'react';
import ri from '@enact/ui/resolution';
import {VirtualGridList} from '@enact/moonstone/VirtualList';
import GridListImageItem from '@enact/moonstone/GridListImageItem';

import ImageItem from './ImageItem';

class ImageList extends React.Component {
	constructor(props) {
		super(props);
		this.items = this.props.imageitems.data;
	}

	static propTypes = {
		imageitems: PropTypes.object
	}

	//renderItem = ({...rest}) => (<ImageItem {...rest} />)
	
	renderItem = ({index, ...rest}) => {
		const {caption,selectImageItem,selected, selectionOverlayShowing, source, subCaption} = this.items[index];
		return (
		<GridListImageItem
			{...rest}
			caption={caption}
			onClick={selectImageItem}
			selected={selected}
			selectionOverlayShowing={selectionOverlayShowing}
			source={source}
			subCaption={subCaption}
		/>);
	};

	render = () => {
		const rest = Object.assign({}, this.props)
		const {imageitems} = this.props;

		delete rest.imageitems;

		return (
			<VirtualGridList
				{...rest}
				dataSize={imageitems.dataOrder.length}
				itemRenderer={this.renderItem}
				itemSize={{minHeight: ri.scale(270), minWidth: ri.scale(180)}}
				spacing={ri.scale(21)}
				direction='horizontal'
			/>
		);
	}
}

export default ImageList;