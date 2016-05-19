import getConfigByURL from '../src/config';
import {bindThumbnailControlButtons} from '../src/thumbnail';
import {bindPostButton} from '../src/postform';
import {bindNightModeButton, startSynchronize} from '../src/nightmode';
import initializeThumbnails from '../src/thumbnail';
import initializeQuotes from '../src/quote';
import initializePostform from '../src/postform';
import initializeNightMode from '../src/nightmode';
import bindReplyListUpdate from '../src/replylistupdate';
import bindThreadListUpdate from '../src/threadlistupdate';
import {injectMenu, enableButtons} from '../src/injectmenu';
import {init} from '../src/settingsync';
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

    // bind the post button event
    initializePostform();
    bindPostButton(menuButtons.postformButton);

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
