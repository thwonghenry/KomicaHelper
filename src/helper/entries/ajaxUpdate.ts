import bindUpdateRepliesButton from '../replyListUpdate';
import bindUpdateThreadsButton from '../threadListUpdate';
import getConfigByURL from '../config';
import {injectMenu, enableButtons} from '../injectMenu';

function initialize(): void {
    'use strict';
    const url: string = window.location.href;

    const config: komicaHelper.Config = getConfigByURL(url);
    const isThread: boolean = config.isThread.test(url);

    // inject the menu buttons
    const menuButtons: komicaHelper.MenuButtons = injectMenu();
    // enable update button
    enableButtons({
        updateButton: true,
    });

    // bind the update button base on the page type
    if (isThread) {
        bindUpdateRepliesButton(menuButtons.menu, menuButtons.locals, menuButtons.updateButton);
    } else {
        bindUpdateThreadsButton(menuButtons.menu, menuButtons.locals, menuButtons.updateButton);
    }
}

if (document.readyState !== 'loading') {
    initialize();
} else {
    document.addEventListener('DOMContentLoaded', initialize.bind(undefined));
}
