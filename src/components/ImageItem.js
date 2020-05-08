import {connect} from 'react-redux';
import GridListImageItem from '@enact/moonstone/GridListImageItem';
import kind from '@enact/core/kind';
import PropTypes from 'prop-types';
import React from 'react';

const ImageItem = kind({
	name: 'ImageItem',

	propTypes: {
		caption: PropTypes.string,
		index: PropTypes.number,
		selected: PropTypes.bool,
		selectImageItem: PropTypes.func,
		selectionOverlayShowing: PropTypes.bool,
		source: PropTypes.string,
		subCaption: PropTypes.string
	},

	render: ({caption, selected, selectImageItem, selectionOverlayShowing, source, subCaption, ...rest}) => {
		delete rest.index;
		delete rest.dispatch;

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
	}
});

/**
const mapStateToProps = ({data}, {['data-index']: dataIndex}) => ({
	caption: data.data[dataIndex].caption,
	selected: data.selectedItems.has(dataIndex),
	selectionOverlayShowing: data.data[dataIndex].selectionOverlayShowing,
	source: data.data[dataIndex].source,
	subCaption: data.data[dataIndex].subCaption
});
*/
function mapStateToProps(a, data){
	console.log(data.index);
	console.log(data);

	const ret = {
		caption: ''
	};

	return ret;
}

export default connect(mapStateToProps)(ImageItem);
