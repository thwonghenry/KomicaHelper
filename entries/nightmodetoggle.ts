import initializeNightMode, {bindNightModeButton} from '../src/nightmode';
import {injectMenu, enableButtons} from '../src/injectmenu';

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
    initializeNightMode();
    bindNightModeButton(document, nightModeButton);

}

if (document.readyState !== 'loading') {
    initialize();
} else {
    document.addEventListener('DOMContentLoaded', initialize.bind(undefined));
}
