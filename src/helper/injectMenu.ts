import getConfigByURL from './config';

// a function that add html as DOM node to element
function addHTMLToElement(tag: string, html: string, element: HTMLElement): void {
    'use strict';
    let node: HTMLElement = document.createElement(tag);
    node.innerHTML = html;
    element.appendChild(node);
}

const url: string = window.location.href;
const config: komicaHelper.Config = getConfigByURL(url);
const isThread: boolean = config.isThread.test(url);

// menu buttons
let menu: HTMLElement;
let updateButton: HTMLAnchorElement;
let expandAllButton: HTMLAnchorElement;
let contractAllButton: HTMLAnchorElement;
let nightModeButton: HTMLAnchorElement;
let locals: komicaHelper.LocalStyle;

// inject menu buttons
export function injectMenu(): komicaHelper.MenuButtons {
    'use strict';
    // import assests
    const style: any = require('!css!sass!../../styles/main.sass');
    const css: string = style[0][1];
    locals = style.locals;
    menu = document.getElementById(locals.komicaHelper);

    // only inject menu if it not exists
    if (!menu) {
        // render the menu buttons with local scoped id
        const body: HTMLElement = document.body;

        locals.newString = isThread ? '新回覆' : '新主題';
        const html: string = require('!jade!../../templates/buttons.jade')(locals);
        // add the menu buttons
        addHTMLToElement('div', html, body);

        // add the buttons style from main.sass
        addHTMLToElement('style', css, body);
        menu = document.getElementById(locals.komicaHelper);
    }

    // retrieve the menu buttons
    updateButton = document.getElementById(locals.update) as HTMLAnchorElement;
    expandAllButton = document.getElementById(locals.expand) as HTMLAnchorElement;
    contractAllButton = document.getElementById(locals.contract) as HTMLAnchorElement;
    nightModeButton = document.getElementById(locals.night) as HTMLAnchorElement;
    return {
        menu, updateButton, expandAllButton, contractAllButton, nightModeButton, locals,
    };
}

function enableButton(button: HTMLAnchorElement): void {
    'use strict';
    // remove the hiddenButton class
    button.classList.remove(locals.hiddenButton);
}

// enable the selected menu buttons
export function enableButtons(enables: komicaHelper.EnableMenuButtons = {
    contractAllButton: true,
    expandAllButton: true,
    nightModeButton: true,
    updateButton: true,
}): void {
    'use strict';
    if (enables.updateButton) {
        enableButton(updateButton);
    }
    if (enables.expandAllButton) {
        enableButton(expandAllButton);
    }
    if (enables.contractAllButton) {
        enableButton(contractAllButton);
    }
    if (enables.nightModeButton) {
        enableButton(nightModeButton);
    }
}
