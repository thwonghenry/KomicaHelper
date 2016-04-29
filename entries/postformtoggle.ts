import initializePostform, {bindPostButton} from '../src/postform';
import {injectMenu, enableButtons} from '../src/injectmenu';

function initialize(): void {
    'use strict';
    // inject menu buttons
    const menuButtons: komicaHelper.MenuButtons = injectMenu();
    const postformButton: HTMLAnchorElement = menuButtons.postformButton;
    // enable the post form button
    enableButtons({
        postformButton: true,
    });

    // initialize post form display toggle
    initializePostform();
    bindPostButton(postformButton);
}

if (document.readyState !== 'loading') {
    initialize();
} else {
    document.addEventListener('DOMContentLoaded', initialize.bind(undefined));
}
