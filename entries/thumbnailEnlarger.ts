import initializeThumbnails, {bindThumbnailControlButtons} from '../src/thumbnail';
import {injectMenu, enableButtons} from '../src/injectMenu';

function initialize(): void {
    'use strict';
    // inject menu buttons
    const menuButtons: komicaHelper.MenuButtons = injectMenu();
    const expandAllButton: HTMLAnchorElement = menuButtons.expandAllButton;
    const contractAllButton: HTMLAnchorElement = menuButtons.contractAllButton;
    // enable contract and expand all buttons
    enableButtons({
        contractAllButton: true,
        expandAllButton: true,
    });

    // initialize thumbnail enlarger
    initializeThumbnails();
    bindThumbnailControlButtons(expandAllButton, contractAllButton);
}

if (document.readyState !== 'loading') {
    initialize();
} else {
    document.addEventListener('DOMContentLoaded', initialize.bind(undefined));
}
