import getConfigByURL from '../config';
import initializeThumbnails, {bindThumbnailControlButtons} from '../thumbnail';
import initializeNightMode, {bindNightModeButton, startSynchronize} from '../nightMode';
import initializeQuotes from '../quote';
import bindReplyListUpdate from '../replyListUpdate';
import bindThreadListUpdate from '../threadListUpdate';
import {injectMenu, enableButtons} from '../injectMenu';
import {init} from '../settingSync';
const url: string = window.location.href;

const config: komicaHelper.Config = getConfigByURL(url);
const isThread: boolean = config.isThread.test(url);
const isMenu: boolean = /web\.komica\.org/.test(url);

function initialize(): void {
    'use strict';

    // inject menu buttons
    const menuButtons: komicaHelper.MenuButtons = injectMenu();
    // enable all menu buttons
    enableButtons();

    // bind the update button base on the page type
    if (isThread) {
        bindReplyListUpdate(menuButtons.menu, menuButtons.locals, menuButtons.updateButton);
    } else {
        bindThreadListUpdate(menuButtons.menu, menuButtons.locals, menuButtons.updateButton);
    }

    // intialize thumbnails related function
    initializeThumbnails();
    bindThumbnailControlButtons(menuButtons.expandAllButton, menuButtons.contractAllButton);

    // initialize reply sticker events
    initializeQuotes(menuButtons.menu);

    // bind the night mode toggle event
    bindNightModeButton(menuButtons.nightModeButton);

    // synchronize the night mode state
    startSynchronize();

}


// if the page is menu page, init for cross storage hub
initializeNightMode();
if (isMenu) {
    init();
} else {
    if (document.readyState !== 'loading') {
        initialize();
    } else {
        document.addEventListener('DOMContentLoaded', initialize.bind(undefined));
    }

}
