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
// import {getSetting, setSetting} from '../src/settingsync';

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
    bindNightModeButton(document, menuButtons.nightModeButton);

    // setSetting({ komica_helper: '123' }, () => {
    //     console.log('set done');
    // });
}

// getSetting((setting: Object) => {
//     console.log('setting');
//     console.log(setting);
// });

if (document.readyState !== 'loading') {
    initialize();
} else {
    document.addEventListener('DOMContentLoaded', initialize);
}
