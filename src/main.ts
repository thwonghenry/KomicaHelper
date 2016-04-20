import {bindUpdateButton} from './update';
import {getConfigByURL} from './config';
import {bindThumbnailControlButtons} from './thumbnail';
import {injectThreadList} from './inject';
import {bindPostButton} from './postform';
import {bindNightModeButton} from './nightmode';

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
    const isThread: boolean = /\?res=/.test(url);

    // import assests
    const style: any = require('!css!sass!./styles/main.sass');
    const css: string = style[0][1];
    const locals: LocalStyle = style.locals;

    // render the menu buttons with local scoped id
    locals.newString = isThread ? '新回覆' : '新主題';
    const html: string = require('!jade!./templates/buttons.jade')(locals);

    const body: HTMLElement = document.body;

    // add the style from main.sass
    addHTMLToElement('style', css, body);
    // add the update button
    addHTMLToElement('div', html, body);

    // the menu buttons at the right
    const menuButtons: HTMLElement = document.getElementById(locals.komicaHelper);

    // load the config by url
    const config: Config = getConfigByURL(url);

    // bind the click button event
    const updateButton: HTMLAnchorElement = document.getElementById(locals.update) as HTMLAnchorElement;
    bindUpdateButton(url, isThread, document, menuButtons, config, locals, updateButton);

    // inject neccessary element to the page

    const qlinks: NodeListOf<Element> = document.getElementsByClassName('qlink');
    const imgs: NodeListOf<Element> = config.getThumbnails(document);
    injectThreadList(qlinks, imgs, config, menuButtons, locals.floatingReply, document);

    // bind all the thumbnail related menu buttons events
    const expandButton: HTMLAnchorElement = document.getElementById(locals.expand) as HTMLAnchorElement;
    const contractButton: HTMLAnchorElement = document.getElementById(locals.contract) as HTMLAnchorElement;
    bindThumbnailControlButtons(expandButton, contractButton);

    // bind the post button event
    const createNewForm: HTMLElement = config.getCreateNewElement(document);
    createNewForm.className += `${locals.createNew} ${locals.hidden}`;
    const createButton: HTMLAnchorElement = document.getElementById(locals.create) as HTMLAnchorElement;
    bindPostButton(locals.hidden, createButton, createNewForm);

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
