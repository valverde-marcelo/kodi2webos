import PropTypes from 'prop-types';
import React from 'react';
import ri from '@enact/ui/resolution';
import { VirtualGridList } from '@enact/moonstone/VirtualList';
import GridListImageItem from '@enact/moonstone/GridListImageItem';

//import ImageItem from './ImageItem';

class ImageList extends React.Component {
	static propTypes = {
		// todas os atributos/propriedades são passadas em props
		// estão disponíveis em this.props
		onClick: PropTypes.func,
		items: PropTypes.array
	}

	constructor(props) {
		super(props);
		//this.items = this.props.imageitems;
		this.sayHello = this.sayHello.bind(this);
	}

	sayHello(id) {
		console.log('Hello!: ');
	  }

	//handleOnClickItem = () => {
	//		console.log("entrou handleOnClickItem");
	//	console.log();
	//}

	handleOnClickItem(idx) {
		console.log("entrou handleOnClickItem");
		console.log(idx);
	}

	//renderItem = ({index, ...rest}) => (<ImageItem {...rest} />)

	renderItem = ({ index, ...props }) => {

		console.log("entrou renderItem do ImageList: " + index);
		//const onClickItem = this.handleOnClickItem(index);
		const { caption, selected, selectionOverlayShowing, source, subCaption } = this.props.items[index];
		//TODO: selectImageItem não está definido, deve ser uma função
		return (
			<GridListImageItem
				{...props}
				caption={caption}
				selected={selected}
				selectionOverlayShowing={selectionOverlayShowing}
				source={source}
				subCaption={subCaption}
				onClick={this.sayHello(index)}
			/>);
	};

	render = () => {

		console.log("entrou no render ImageList");

		//clona o objeto
		const rest = Object.assign({}, this.props)

		const { items } = this.props;
		//console.log(imageitems);

		//remove imageitems do ojeto rest
		delete rest.items;
		//console.log(rest);

		return (
			<VirtualGridList
				{...rest}
				dataSize={items.length}
				itemRenderer={this.renderItem}
				itemSize={{ minHeight: ri.scale(270), minWidth: ri.scale(180) }}
				spacing={ri.scale(21)}
				direction='vertical'
			/>
		);
	}
}

export default ImageList;