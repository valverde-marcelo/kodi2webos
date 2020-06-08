import Button from '@enact/moonstone/Button';
import { Header, Panel } from '@enact/moonstone/Panels';
import kind from '@enact/core/kind';
import PropTypes from 'prop-types';
import React from 'react';

import storage from '../storage';
import debug from '../utis/debug';

import Scroller from '@enact/ui/Scroller/Scroller';

const logger = debug('components:settings');

const SettingsPanel = kind({
    name: 'SettingsPanel',

    propTypes: {
        sectionID: PropTypes.number,
        itemID: PropTypes.string,
        onClick: PropTypes.func,
    },

    handlers: {
        _clearStorage: () => {
            storage.clear()
                .then(() => {
                    /**
                    addNotification({
                        title: 'Local Storage',
                        message: 'Local storage has been cleared.',
                        level: 'info'
                    });
                    */

                   logger('Local storage has been cleared', err);
                })
                .catch(err => {
                    /*
                    addNotification({
                        title: 'Local Storage',
                        message: 'Failed to clear local storage.',
                        level: 'error'
                    });
                    */

                    logger('Failed to clear storage', err);
                });
        },
    },

    render: ({ sectionID, itemID, onClick, text, ...rest }) => {
        //console.log(`SettingsPanel - entrou no render`);
        logger("SettingsPanel - entrou no render")
        return (
            <Panel {...rest}>
                <Header type="compact" title={`Settings Panel`} />
                <div>
                    <Scroller>
                        <Button onClick={onClick}>Go to Home</Button>
                        <Button onClick={_clearStorage}>Clear local storage</Button>
                    </Scroller>

                </div>
            </Panel>
        );
    }
});

export default SettingsPanel;
