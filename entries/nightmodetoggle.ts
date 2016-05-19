import initializeNightMode, {bindNightModeButton, startSynchronize} from '../src/nightmode';
import {injectMenu, enableButtons} from '../src/injectmenu';
import {init} from '../src/settingsync';

const isMenu: boolean = /web\.komica\.org/.test(window.location.href);
function initialize(): void {
    'use strict';
    // inject the menu buttons
    const menuButtons: komicaHelper.MenuButtons = injectMenu();
    const nightModeButton: HTMLAnchorElement = menuButtons.nightModeButton;
    // enable night mode toggle
    enableButtons({
        nightModeButton: true,
    });

    // initialize night mode toggle
    bindNightModeButton(nightModeButton);

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
