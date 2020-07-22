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

import React, { useState, useEffect } from 'react';
import { Panel } from '@enact/moonstone/Panels';
import CircularProgress from '@material-ui/core/CircularProgress';
import css from './LoadingPanel.module.less';
import storage from '../utils/storage';
import utils from '../utils/utils';
import debug from '../utils/debug';
import api from '../api';

import {
	DEMO_MODE,
	LOCAL_STORAGE_PREFIX_SERVER,
	STEP,
	MOVIES_LIST_IN_PROGRESS,
	MOVIES_LIST_LAST_ADDED,
	MOVIES_LIST_LAST_VIEWED,
	PROTOCOL_HTTP,
	MOVIE_SETS_LIST_ALL,
	MOVIES_LIST_BY_GENRE_PREFIX,
	MOVIES_LIST_GENRES
} from '../utils/global';


const logger = debug('views:loading');

/**
 * 1) Verificar se é o primeiro acesso -> redireciona para SettingsPanel
 * 2) Incrementa número de acesso
 * 3) Verificar se há servidor configurado -> redireciona para SettingsPanel
 * 4) Verificar conexao com o servidor -> redireciona para SettingsPanel
 * 5) Consumir a API e persistir os dados no localStorage
 * 6) Redirecionar para painel principal
 */

const access = () => {
	// incrementa contador de acessos
	logger("incrementou acesso");
	const n = storage.getSync("access", LOCAL_STORAGE_PREFIX_SERVER);
	storage.setSync("access", n + 1, LOCAL_STORAGE_PREFIX_SERVER);
}

function LoadingPanel({ onFirstPanel, onSettingsPanel }) {

	logger("entrou loadingPanel");

	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);

			await utils.sleep(STEP);

			// verificar se é primeiro acesso
			logger("verificar primeiro acesso");
			if (storage.getSync("access", LOCAL_STORAGE_PREFIX_SERVER) === null) {
				logger("identificou primeiro acesso -> redireciona para SettingsPanel");

				//setar valores padrão
				storage.setSync("protocol", PROTOCOL_HTTP, LOCAL_STORAGE_PREFIX_SERVER);
				storage.setSync(DEMO_MODE, true, LOCAL_STORAGE_PREFIX_SERVER);
				setIsLoading(false);
				access(); //incrementa contador de acesso
				onSettingsPanel(); //redireciona
			}

			else {
				logger("NÂO é primeiro acesso -> continuar verificações");

				await utils.sleep(STEP);

				access(); //incrementa contador de acesso

				//verificar configuração do servidor
				logger("verificando configuração do servidor...");
				const noConfig = api.noConfig();

				if (noConfig) {
					logger("servidor não configurado -> redireciona para SettingsPanel");
					setIsLoading(false);
					onSettingsPanel();
				} else {

					await utils.sleep(STEP);

					//verificar conexao com o servidor
					logger("verificando conexao com o servidor...")
					const noConnection = await api.noConnection();

					if (noConnection) {
						logger("não foi possível estabelecer conexão com o servidor. verifique configurações.");
						setIsLoading(false);
						onSettingsPanel();
					} else {

						//consumir API e persistir dados
						logger("tudo ok! consumir api...")
						await utils.sleep(STEP);

						/**
						 * MOVIES
						 */

						const moviesListInProgress = await api.getMoviesInProgress(0, 9);
						logger(moviesListInProgress);
						storage.setSync(MOVIES_LIST_IN_PROGRESS, moviesListInProgress);

						const moviesListLastAdded = await api.getMoviesLastAdded(0, 9);
						logger(moviesListLastAdded);
						storage.setSync(MOVIES_LIST_LAST_ADDED, moviesListLastAdded);

						const moviesListLastViews = await api.getMoviesLastViewed(0, 9);
						logger(moviesListLastViews);
						storage.setSync(MOVIES_LIST_LAST_VIEWED, moviesListLastViews);

						/**
						 * MOVIES BY GENRE
						 */

						const genres = await api.getGenres();
						logger(genres);
						storage.setSync(MOVIES_LIST_GENRES, genres);

						const promises = genres.map(async (genre) => {
							let index = MOVIES_LIST_BY_GENRE_PREFIX + genre.genreid;
							let moviesListByGenre = await api.getMoviesByGenre(0, 9, genre.label);
							logger(moviesListByGenre);
							storage.setSync(index, moviesListByGenre);
						}

						);

						await Promise.all(promises);

						/**
						 * MOVIE SETS
						 */

						const movieSetsListAll = await api.getMovieSets();
						logger(movieSetsListAll);
						storage.setSync(MOVIE_SETS_LIST_ALL, movieSetsListAll);

						//const tvShows = api.getTVshows(0,10);
						//logger(tvShows);

						setIsLoading(false);
						logger("direcionar para onFirstPanel");
						onFirstPanel();
					}
				}
			}
		};

		fetchData();
	}, []);

	return (
		<Panel className={css.panel}>
			<div className={css.container}>
				<div className={css.loading}>
					{isLoading ? (<div><CircularProgress size={100} /></div>) : (<div />)}
				</div>
			</div>
		</Panel>
	);
}

export default LoadingPanel;
