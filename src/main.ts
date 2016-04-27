import getConfigByURL from './config';
import {bindThumbnailControlButtons} from './thumbnail';
import {bindPostButton} from './postform';
import {bindNightModeButton} from './nightmode';
import initializeThumbnails from './thumbnail';
import initializeQuotes from './quote';
import bindReplyUpdate from './replyupdate';
import bindThreadUpdate from './threadupdate';

// a function that add html as DOM node to element
function addHTMLToElement(tag: string, html: string, element: HTMLElement): void {
    'use strict';
    let node: HTMLElement = document.createElement(tag);
    node.innerHTML = html;
    element.appendChild(node);
}

function initialize(): void {
    'use strict';
    const url: string = window.location.href;

    // import assests
    const style: any = require('!css!sass!./styles/main.sass');
    const css: string = style[0][1];
    const locals: LocalStyle = style.locals;

    // render the menu buttons with local scoped id

    const body: HTMLElement = document.body;

    // load the config by url
    const config: Config = getConfigByURL(url);
    const isThread: boolean = config.isThread.test(url);
    locals.newString = isThread ? '新回覆' : '新主題';
    const html: string = require('!jade!./templates/buttons.jade')(locals);
    // add the update button
    addHTMLToElement('div', html, body);

    // add the style from main.sass
    addHTMLToElement('style', css, body);

    // the menu buttons at the right
    const menuButtons: HTMLElement = document.getElementById(locals.komicaHelper);

    // bind the update button event
    const updateButton: HTMLAnchorElement = document.getElementById(locals.update) as HTMLAnchorElement;
    if (isThread) {
        bindReplyUpdate(url, document, menuButtons, config, locals, updateButton);
    } else {
        bindThreadUpdate(url, document, menuButtons, config, locals, updateButton);
    }

    initializeThumbnails(config, isThread);
    initializeQuotes(config, isThread, menuButtons);

    // bind all the thumbnail related menu buttons events
    const expandButton: HTMLAnchorElement = document.getElementById(locals.expand) as HTMLAnchorElement;
    const contractButton: HTMLAnchorElement = document.getElementById(locals.contract) as HTMLAnchorElement;
    bindThumbnailControlButtons(expandButton, contractButton);

    // bind the post button event
    const createNewForm: HTMLElement = config.getCreateNewElement(document);
    if (createNewForm) {
        createNewForm.className += `${locals.createNew} ${locals.hidden}`;
        const createButton: HTMLAnchorElement = document.getElementById(locals.create) as HTMLAnchorElement;
        bindPostButton(locals.hidden, createButton, createNewForm);
    }

    // bind the night mode toggle event
    const nightButton: HTMLAnchorElement = document.getElementById(locals.night) as HTMLAnchorElement;
    bindNightModeButton(document, config.darkStyle, nightButton);
}

window.addEventListener('load', initialize);

// let mutationObserver: MutationObserver = new MutationObserver((mutations: MutationRecord[], observer: MutationObserver) => {
//     mutations.forEach((mutation: MutationRecord) => {
//         if (mutation.removedNodes.length > 0) {
//             console.log('hi');
//             observer.disconnect();
//         }
//     });
// });
//
// mutationObserver.observe(anchor.parentNode.parentNode, {
//     childList: true,
// });
