/*
 * File: factory.js
 * Project: kodi2webos
 * File Created: Sunday, 3rd May 2020 1:40:01 pm
 * Author: valverde82 (valverde.marcelo@gmail.com)
 * -----
 * Last Modified: Wednesday, 10th June 2020 3:25:06 pm
 * Modified By: valverde82 (valverde.marcelo@gmail.com>)
 * -----
 * Copyright 2020 © VALVERDE, Marcelo Richard. All Rigths Reserved.
 */

export const createImageItens = (label,size) => {
	let itens = [];
	let caption, subCaption, color;

	for(let idx = 0; idx < size; ++idx){
		caption = (idx % 8 === 0) ? ' with long title' : '';
		subCaption = (idx % 8 === 0) ? 'Lorem ipsum dolor sit amet' : 'Subtitle';
		color = Math.floor((Math.random() * (0x1000000 - 0x101010)) + 0x101010).toString(16);

		itens[idx] = {
			selected: false,
			selectionOverlayShowing: false,
			caption: label + ' ' + idx + caption,
			subCaption: subCaption,
			source: 'http://placehold.it/300x300/' + color + '/ffffff&text=Image ' + idx
		};
	}

	return itens;
};

export const createRecords = (album, size) => {
	let
		records = {
			album: album,
			dataOrder: [],
			data: {},
			selectedItems: new Set(),
			showOverlay: false
		},
		caption, subCaption, color;

	for (let idx = 0; idx < size; ++idx) {
		caption = (idx % 8 === 0) ? ' with long title' : '';
		subCaption = (idx % 8 === 0) ? 'Lorem ipsum dolor sit amet' : 'Subtitle';
		color = Math.floor((Math.random() * (0x1000000 - 0x101010)) + 0x101010).toString(16);

		records.dataOrder.push(idx);
		records.data[idx] = {
			selected: false,
			selectionOverlayShowing: false,
			caption: album + ' ' + idx + caption,
			subCaption: subCaption,
			source: 'http://placehold.it/300x300/' + color + '/ffffff&text=Image ' + idx
		};
	}

	return records;
};