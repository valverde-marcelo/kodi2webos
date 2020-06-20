/*
 * File: SettingsPanel.js
 * Project: kodi2webos
 * File Created: Sunday, 7th June 2020 9:32:04 pm
 * Author: valverde82 (valverde.marcelo@gmail.com)
 * -----
 * Last Modified: Wednesday, 10th June 2020 3:24:28 pm
 * Modified By: valverde82 (valverde.marcelo@gmail.com>)
 * -----
 * Copyright 2020 © VALVERDE, Marcelo Richard. All Rigths Reserved.
 */


import React from 'react';
import LabeledIconButton from '@enact/moonstone/LabeledIconButton';
import { Panel } from '@enact/moonstone/Panels';
import Group from '@enact/ui/Group';
import RadioItem from '@enact/moonstone/RadioItem';
import Input from '@enact/moonstone/Input';
import { Layout, Cell } from '@enact/ui/Layout';
import CheckboxItem from '@enact/moonstone/CheckboxItem';

import storage from '../utils/storage';
import debug from '../utils/debug';
import css from './SettingsPanel.module.less';
import {
    LOCAL_STORAGE_PREFIX, LOCAL_STORAGE_PREFIX_SERVER, PROTOCOLS,
    INPUT_PLACEHOLDER_IP, INPUT_PLACEHOLDER_PORT, DEMO_MODE
} from '../utils/global';

const logger = debug('views:settings');

function server_protocol () {
    return PROTOCOLS.indexOf(storage.getSync("protocol", LOCAL_STORAGE_PREFIX_SERVER));
}

const server_ip = storage.getSync("ip", LOCAL_STORAGE_PREFIX_SERVER);

const server_port = storage.getSync("port", LOCAL_STORAGE_PREFIX_SERVER);

// limpa o localStorage a partir de LOCAL_STORAGE_PREFIX
function _resetApplication ({ onLoadingPanel }) {
    logger('executou _resetApplication');
    storage.clearSync(LOCAL_STORAGE_PREFIX);
    window.location.reload()
}

// limpa o localStorage a partir de LOCAL_STORAGE_PREFIX_DATA
function _refreshData ({ onLoadingPanel }) {
    logger('executou _refreshData');
    storage.clearSync();
    window.location.reload()
}

function _onChangeServerProtocol ({ data }) {
    //logger(data);
    storage.setSync("protocol", data, LOCAL_STORAGE_PREFIX_SERVER);
}

function _onChangeServerIp ({ value }) {
    //logger(value);
    storage.setSync("ip", value, LOCAL_STORAGE_PREFIX_SERVER);
}

function _onChangeServerPort ({ value }) {
    //logger(value);
    storage.setSync("port", value, LOCAL_STORAGE_PREFIX_SERVER);
}

function RadioGroupProtocols() {

    return (
        <Group
            childComponent={RadioItem}
            select="radio"
            selectedProp="selected"
            defaultSelected={server_protocol()}
            onSelect={_onChangeServerProtocol}
        >
            {PROTOCOLS}
        </Group>
    );
}

function _onToggle() {
    if (storage.getSync(DEMO_MODE, LOCAL_STORAGE_PREFIX_SERVER) === true) {
        storage.setSync(DEMO_MODE, false, LOCAL_STORAGE_PREFIX_SERVER);
    } else {
        storage.setSync(DEMO_MODE, true, LOCAL_STORAGE_PREFIX_SERVER);
    }
}

function ToggleDemoMode() {
    
    let selected = storage.getSync(DEMO_MODE, LOCAL_STORAGE_PREFIX_SERVER)? true: false;

    return (
        <CheckboxItem onToggle={_onToggle} defaultSelected={selected}>
            Demo mode.
        </CheckboxItem>
    );
}

function SettingsPanel({ onClick, onLoadingPanel, sectionID, itemID, ...rest }) {

    logger("entrou settingsPanel");

    //let demo = storage.getSync(DEMO_MODE, LOCAL_STORAGE_PREFIX_SERVER)? true: false;

    return (
        <Panel {...rest}>
            <section className={css.container}>
            <fieldset>
                    <Layout align="start">
                        <ToggleDemoMode/>
                    </Layout>
                </fieldset>
                <br />
                <fieldset>
                    <Layout align="start">
                        <Cell component="label" size="40%" className={css.label}>Kodi Server Protocol:</Cell>
                        <Cell component={RadioGroupProtocols} size="60%" className={css.radioGroup} />
                    </Layout>
                    <br />
                    <Layout align="center">
                        <Cell component="label" size="40%" className={css.label}>Kodi Server IP:</Cell>
                        <Cell component={Input} size="60%" className={css.input} placeholder={INPUT_PLACEHOLDER_IP} defaultValue={server_ip} onChange={_onChangeServerIp} />
                    </Layout>
                    <br />
                    <Layout align="center">
                        <Cell component="label" size="40%" className={css.label}>Kodi Server Port:</Cell>
                        <Cell component={Input} size="60%" className={css.input} placeholder={INPUT_PLACEHOLDER_PORT} defaultValue={server_port} onChange={_onChangeServerPort} />
                    </Layout>
                    <br />
                </fieldset>
                <br />
                <fieldset>
                    <legend>Actions</legend>
                    <Layout align="start">
                        <Cell component={LabeledIconButton} icon="home" className={css.button} labelPosition="after" onClick={() => window.location.reload()}>Go to Home</Cell>
                        <Cell component={LabeledIconButton} icon="refresh" labelPosition="after" onClick={() => _refreshData({ onLoadingPanel })}>Refresh data</Cell>
                        <Cell component={LabeledIconButton} icon="warning" labelPosition="after" onClick={() => _resetApplication({ onLoadingPanel })}>Reset application</Cell>
                    </Layout>
                </fieldset>
            </section>
        </Panel>
    );
}

export default SettingsPanel;

/**
 * 
 *                 <fieldset>
                    <legend>Actions</legend>
                    <Layout align="start">
                        <Cell component={LabeledIconButton} icon="home" className={css.button} labelPosition="after" onClick={() => window.location.reload()}>Go to Home</Cell>
                        <Cell component={LabeledIconButton} icon="refresh" labelPosition="after" onClick={() => _refreshData({ onLoadingPanel })}>Refresh data</Cell>
                        <Cell component={LabeledIconButton} icon="warning" labelPosition="after" onClick={() => _resetApplication({ onLoadingPanel })}>Reset application</Cell>
                    </Layout>
                </fieldset>
                <br />
                <fieldset>
                    <Layout align="start">
                        <ToggleDemoMode defaultSelected={demo} />
                    </Layout>
                </fieldset>

 */