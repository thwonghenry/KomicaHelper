import getConfigByURL from '../src/config';
import {bindThumbnailControlButtons} from '../src/thumbnail';
import {bindPostButton} from '../src/postform';
import {bindNightModeButton} from '../src/nightmode';
import initializeThumbnails from '../src/thumbnail';
import initializeQuotes from '../src/quote';
import initializePostform from '../src/postform';
import initializeNightMode from '../src/nightmode';
import bindReplyListUpdate from '../src/replylistupdate';
import bindThreadListUpdate from '../src/threadlistupdate';
import {injectMenu, enableButtons} from '../src/injectmenu';
import {init} from '../src/settingsync';

function initialize(): void {
    'use strict';
    const url: string = window.location.href;

    const config: komicaHelper.Config = getConfigByURL(url);
    const isThread: boolean = config.isThread.test(url);
    // inject menu buttons
    const menuButtons: komicaHelper.MenuButtons = injectMenu(config, isThread);
    // enable all menu buttons
    enableButtons();

    // bind the update button base on the page type
    if (isThread) {
        bindReplyListUpdate(url, document, menuButtons.menu, config, menuButtons.locals, menuButtons.updateButton);
    } else {
        bindThreadListUpdate(url, document, menuButtons.menu, config, menuButtons.locals, menuButtons.updateButton);
    }

    // intialize thumbnails related function
    initializeThumbnails(config, isThread);
    bindThumbnailControlButtons(menuButtons.expandAllButton, menuButtons.contractAllButton);

    // initialize reply sticker events
    initializeQuotes(config, isThread, menuButtons.menu);

    // bind the post button event
    initializePostform(config);
    bindPostButton(menuButtons.postformButton);

    // bind the night mode toggle event
    initializeNightMode(config.darkStyle);
    bindNightModeButton(menuButtons.nightModeButton);

}

function initializeMenu(): void {
    'use strict';
    const config: komicaHelper.Config = getConfigByURL(window.location.href);

    initializeNightMode(config.darkStyle, true);
}

let initFunction: Function;

// if the page is menu page, init for cross storage hub
if (/web\.komica\.org/.test(window.location.href)) {
    init();
    initFunction = initializeMenu;
} else {
    initFunction = initialize;
}

if (document.readyState !== 'loading') {
    initFunction();
} else {
    document.addEventListener('DOMContentLoaded', initFunction.bind(undefined));
}
