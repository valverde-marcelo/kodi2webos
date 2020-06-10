/*
 * File: LoadingPanel.js
 * Project: kodi2webos
 * File Created: Tuesday, 9th June 2020 5:46:57 pm
 * Author: valverde82 (valverde.marcelo@gmail.com)
 * -----
 * Last Modified: Wednesday, 10th June 2020 3:23:29 pm
 * Modified By: valverde82 (valverde.marcelo@gmail.com>)
 * -----
 * Copyright 2020 © VALVERDE, Marcelo Richard. All Rigths Reserved.
 */

import Button from '@enact/moonstone/Button';
import { Header, Panel } from '@enact/moonstone/Panels';
import kind from '@enact/core/kind';
import PropTypes from 'prop-types';
import React from 'react';
import Scroller from '@enact/ui/Scroller/Scroller';

//import api from '../api/';
import api from '../api/mock';
import debug from '../utils/debug';

const logger = debug('views:loading');

/**
 * Verificar se há servidor configurado
 * Verificar conexao com o servidor
 * LoadingPanel -> SettingsPanel -> LoadingPanel
 */


/**
 * Consumir a API
 * - a API retorna o response JSON
 * - os dados estão em data.result...
 */

 const movies = api.getMovies(0,10).data.result.movies;
 logger(movies);

 //const tvShows = api.getTVshows(0,10);
 //logger(tvShows);

 /**
  * Persistir os dados no localStorage
  */


/**
 * Sair do LoadingPanel -> MainPanel
 */

 //TODO: transformar em componente statefull para utilizar as chamadas assincronas

const LoadingPanel = kind({
	name: 'LoadingPanel',

	propTypes: {
		onClick: PropTypes.func,
	},

	computed: {

	},

	render: ({ onClick, ...rest }) => {
		logger("entrou no render");
		return (
			<Panel {...rest}>
				<Header type="compact" title={`Loading Panel : `} />
				<div>
					<Scroller>
						<Button onClick={onClick}>Go to Home</Button>
					</Scroller>
				</div>
			</Panel>
		);
	}
});

export default LoadingPanel;
