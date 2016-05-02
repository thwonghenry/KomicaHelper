import initializeNightMode, {bindNightModeButton} from '../src/nightmode';
import {injectMenu, enableButtons} from '../src/injectmenu';
import {init} from '../src/settingsync';

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
    bindNightModeButton(nightModeButton);

}

function initializeMenu(): void {
    'use strict';

    initializeNightMode(undefined, true);
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
