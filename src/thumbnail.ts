import getConfigByURL from './config';
import DOMWatcher from './DOMWatcher';

const url: string = window.location.href;
const config: komicaHelper.Config = getConfigByURL(url);
const isThread: boolean = config.isThread.test(url);

const style: any = require('!css!sass!../styles/thumbnail.sass');
const css: string = style[0][1];
const locals: komicaHelper.LocalStyle = style.locals;


let buttons: {[img: string]: HTMLAnchorElement} = {};

function bindThumbnail(img: HTMLImageElement): void {
    'use strict';
    // create the button element for image function
    let button: HTMLAnchorElement = document.createElement('a');
    button.innerHTML = '放大';
    button.href = '#';

    // insert the button alongside with the image
    let anchor: HTMLAnchorElement = img.parentNode as HTMLAnchorElement;
    anchor.parentNode.insertBefore(button, anchor.nextSibling);

    // use for breaking line between the enlarged image and the reply
    let br: HTMLBRElement = document.createElement('br');

    // save the src of the thumbnail for restoring later
    const src: string = img.src;

    // remove all the dimension related attributes
    img.removeAttribute('style');
    img.removeAttribute('width');
    img.removeAttribute('height');

    // add custom thumbnail class
    img.classList.add(locals.contracted);

    button.addEventListener('click', function(event: Event): void {
        event.preventDefault();

        // enlarge the image
        if (img.classList.contains(locals.contracted)) {
            img.src = anchor.href;
            img.classList.remove(locals.contracted);
            img.classList.add(locals.expanded);
            anchor.parentNode.insertBefore(br, button);
            button.innerHTML = '縮小';
        } else if (img.classList.contains(locals.expanded)) {
            // restore the image and button
            img.src = src;
            img.classList.remove(locals.expanded);
            img.classList.add(locals.contracted);
            anchor.parentNode.removeChild(br);
            button.innerHTML = '放大';
        }
    });
    buttons[src] = button;
}

export function bindThumbnailControlButtons(expandButton: HTMLAnchorElement, contractButton: HTMLAnchorElement): void {
    'use strict';

    // bind the button that expand all unexpanded thumbnails
    expandButton.addEventListener('click', function(event: Event): void {
        event.preventDefault();
        // click all the enlarge button
        Object.keys(buttons).forEach((key: string) => {
            const button: HTMLAnchorElement = buttons[key];
            if (button.innerHTML === '放大') {
                button.click();
            }
        });
    });

    // bind the button that expand all expanded thumbnails
    contractButton.addEventListener('click', function(event: Event): void {
        event.preventDefault();
        // click all the contract button
        Object.keys(buttons).forEach((key: string) => {
            const button: HTMLAnchorElement = buttons[key];
            if (button.innerHTML === '縮小') {
                button.click();
            }
        });
    });
}

export default function initializeThumbnails(): void {

    'use strict';
    // append the style
    let styleTag: HTMLElement = document.createElement('style');
    styleTag.innerHTML = css;
    document.body.appendChild(styleTag);

    // bind all the thumbnails to a button
    const imgs: NodeListOf<Element> = config.getThumbnails(document);
    for (let i: number = 0; i < imgs.length; i++) {
        bindThumbnail(imgs[i] as HTMLImageElement);
    }

    // attach a DOM watcher on the main thread or thread list
    const parent: HTMLElement = isThread ? config.getReplies(document) : config.getThreads(document);

    const domWatcher: DOMWatcher = new DOMWatcher(parent);
    domWatcher.on('addnode', (element: Node) => {
        let reply: HTMLElement = element as HTMLElement;
        let id: string = reply.id;
        let clear: boolean = false;
        // if the element is text node, continue;
        if (!reply.setAttribute) {
            return;
        }
        // if no id to query, add a temporary id to the node
        if (!id) {
            reply.setAttribute('id', 'komica_helper_temp');
            id = reply.id;
            clear = true;
        }
        // query the thumbnail element
        let img: HTMLImageElement = document.querySelector(`#${id} img`) as HTMLImageElement;
        if (img) {
            bindThumbnail(img);
        }
        // if a temporary id is added, clear it at the end
        if (clear) {
            reply.removeAttribute('id');
        }
    });
    domWatcher.start();
}
