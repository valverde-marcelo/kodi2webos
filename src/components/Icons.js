/*
 * File: Icon.js
 * Project: kodi2webos
 * File Created: Monday, 1st June 2020 1:42:25 pm
 * Author: valverde82 (valverde.marcelo@gmail.com)
 * -----
 * Last Modified: Wednesday, 10th June 2020 3:26:55 pm
 * Modified By: valverde82 (valverde.marcelo@gmail.com>)
 * -----
 * Copyright 2020 © VALVERDE, Marcelo Richard. All Rigths Reserved.
 */


import React from 'react';
import Spottable from '@enact/spotlight/Spottable';
import { Film, Tv, Grid, Star} from 'react-feather';

import css from './Icons.module.less';
import debug from '../utils/debug';
const logger = debug('components:icons');

import { SECTION_MOVIES, SECTION_TV_SHOWS, SECTION_COLLECTIONS, SECTION_FAVOURITES, SECTION_MOVIE_SETS } from '../utils/global';


function IconBase({ children, ...rest }){
	return (<div {...rest}>{children}</div>);
}


const IconMovies = Spottable(IconBase);
const IconTvShows = Spottable(IconBase);
const IconFavourites = Spottable(IconBase);
const IconMovieSets = Spottable(IconBase);
export const IconSettings = Spottable(IconBase);


function Icons({ children, onClick, ...rest }) {

	logger("entrou");

	logger(rest);
	let component = null;

	switch (children) {
		case SECTION_MOVIES:
			component = <IconMovies className={css.icon} tabIndex={1} onClick={onClick}><Film /></IconMovies>;
			break;

		case SECTION_TV_SHOWS:
			component = <IconTvShows className={css.icon} onClick={onClick}><Tv/></IconTvShows>;
			break;

		case SECTION_MOVIE_SETS:
			component = <IconMovieSets className={css.icon} onClick={onClick}><Grid/></IconMovieSets>;

			break;

		case SECTION_FAVOURITES:
			component = <IconFavourites className={css.icon} onClick={onClick}><Star/></IconFavourites>;
			break;

		default:
			break;
	}

	return (<div>{component}</div>);
}

export default Icons;