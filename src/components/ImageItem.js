import GridListImageItem from '@enact/moonstone/GridListImageItem';
import PropTypes from 'prop-types';
import React from 'react';

class ImageItem extends React.Component {
	constructor(props) {
		super(props);
		console.log(this.props);
	}

	static propTypes = {
		caption: PropTypes.string,
		index: PropTypes.number,
		selected: PropTypes.bool,
		selectImageItem: PropTypes.func,
		selectionOverlayShowing: PropTypes.bool,
		source: PropTypes.string,
		subCaption: PropTypes.string
	}

	render = ({caption, selected, selectImageItem, selectionOverlayShowing, source, subCaption, ...rest}) => {
		return (
			<GridListImageItem
				{...rest}
				caption={caption}
				onClick={selectImageItem}
				selected={selected}
				selectionOverlayShowing={selectionOverlayShowing}
				source={source}
				subCaption={subCaption}
			/>
		);
	};
}

export default ImageItem;
