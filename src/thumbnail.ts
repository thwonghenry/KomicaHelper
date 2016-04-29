import getConfigByURL from './config';
import DOMWatcher from './DOMWatcher';

let buttons: HTMLButtonElement[] = [];

function bindThumbnail(img: HTMLImageElement, config: komicaHelper.Config, doc: Document): void {
    'use strict';
    // create the button element for image function
    let button: HTMLButtonElement = doc.createElement('button');
    button.innerHTML = '放大';

    // insert the button alongside with the image
    let anchor: HTMLAnchorElement = img.parentNode as HTMLAnchorElement;
    anchor.parentNode.insertBefore(button, anchor.nextSibling);

    // use for breaking line between the enlarged image and the reply
    let br: HTMLBRElement = doc.createElement('br');

    // save the size of the thumbnail for restoring later
    const size: komicaHelper.ThumbnailSize = config.getThumbnailSize(img);
    if (!size) {
        console.error('Error when getting the size of thumbnail');
        return;
    }

    button.addEventListener('click', function(event: Event): void {
        event.preventDefault();

        // enlarge the image
        if (button.innerHTML === '放大') {
            img.src = anchor.href;
            config.enlargeThumbnail(img);
            anchor.parentNode.insertBefore(br, button);
            button.innerHTML = '縮小';
        } else if (button.innerHTML === '縮小') {
            // restore the image and button
            config.setThumbnailSize(img, size);
            anchor.parentNode.removeChild(br);
            button.innerHTML = '放大';
        }
    });
    buttons.push(button);
}

export function resetButtons(): void {
    'use strict';
    // reset the button list by setting empty array
    console.log('reset');
    buttons = [];
}

export function bindThumbnailControlButtons(expandButton: HTMLAnchorElement, contractButton: HTMLAnchorElement): void {
    'use strict';

    // bind the button that expand all unexpanded thumbnails
    expandButton.addEventListener('click', function(event: Event): void {
        event.preventDefault();
        // click all the enlarge button
        for (let i: number = 0; i < buttons.length; i++) {
            const button: HTMLButtonElement = buttons[i];
            if (button.innerHTML === '放大') {
                button.click();
            }
        }
    });

    // bind the button that expand all expanded thumbnails
    contractButton.addEventListener('click', function(event: Event): void {
        event.preventDefault();
        // click all the contract button
        for (let i: number = 0; i < buttons.length; i++) {
            const button: HTMLButtonElement = buttons[i];
            if (button.innerHTML === '縮小') {
                button.click();
            }
        }
    });
}

const url: string = window.location.href;
export default function initializeThumbnails(config: komicaHelper.Config = getConfigByURL(url),
    isThread: boolean = config.isThread.test(url)): void {

    'use strict';
    // bind all the thumbnails to a button
    const imgs: NodeListOf<Element> = config.getThumbnails(document);
    for (let i: number = 0; i < imgs.length; i++) {
        bindThumbnail(imgs[i] as HTMLImageElement, config, document);
    }

    // attach a DOM watcher on the main thread or thread list
    const parent: HTMLElement = isThread ? config.getReplies(document) : config.getThreads(document);

    const domWatcher: DOMWatcher = new DOMWatcher(parent);
    domWatcher.onAddNode((element: Node) => {
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
            bindThumbnail(img, config, document);
        }
        // if a temporary id is added, clear it at the end
        if (clear) {
            reply.removeAttribute('id');
        }
    });

    domWatcher.onUpdate(isThread ? undefined : resetButtons);
    domWatcher.start();
}
