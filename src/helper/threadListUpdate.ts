// update function after clicking update button
import Ajax from '../Ajax';
import getConfigByURL from './config';

const url: string = window.location.href;
const config: komicaHelper.Config = getConfigByURL(url);

function createUpdateCallback(floatsParent: HTMLElement = document.body,
    floatClass: string): () => Promise<number> {

    'use strict';
    // initialize ajax object
    const ajax: Ajax = new Ajax('get', url, 'document');

    let newElements: HTMLElement;
    let oldElements: HTMLElement;
    let newChildren: HTMLCollection;
    let oldChildren: HTMLCollection;

    // get the method of obtaining threads
    const getElements: (doc: Document) => HTMLElement = config.getThreads;

    return function(): Promise<number> {
        return ajax.start().then(
            (newDoc: Document) => {
                // create a new doc to plug in the ajax result
                newElements = getElements(newDoc);
                oldElements = getElements(document);
                if (!newElements || !oldElements) {
                    console.error('Error when getting the document of ajax result');
                    return;
                }
                newChildren = newElements.children;
                oldChildren = oldElements.children;

                // update the whole page
                oldElements.innerHTML = newElements.innerHTML;

                // return the diff value
                return new Promise<number>((resolve: (diff: number) => void) => {
                    resolve(0);
                });
            },
            () => console.log('rejected')
        );
    };

}

export default function bindUpdateButton(menuButtons: HTMLElement,
    locals: komicaHelper.LocalStyle, updateButton: HTMLAnchorElement): void {

    'use strict';
    // create callback function
    const clickCallback: () => Promise<number> = createUpdateCallback(menuButtons, locals.floatingReply);

    // store the id of setTimeout in the click event below for later clearTimeout
    let timeout: number = 0;

    updateButton.addEventListener('click', function(event: Event): void {
        event.preventDefault();

        // only invoke update function if it is not updating
        if (!(/disabledAnchor/.test(this.className))) {
            this.classList.add(locals.disabledAnchor);
            this.innerHTML = '更新中..<br>';

            // remove any timeout that is started before
            if (timeout) {
                clearTimeout(timeout);
            }
            clickCallback().then((diff: number) => {

                // remove the "disabledAnchor" class
                this.classList.remove(locals.disabledAnchor);

                return new Promise<void>((resolve: () => void) => {
                    if (diff) {
                        // if there are new thread, show the diff and reset after 5 seconds
                        this.innerHTML = `更新(+${diff})<br>`;
                        timeout = setTimeout(resolve, 5000);
                    } else {
                        // reset immediately
                        resolve();
                    }
                });
            }).then(() => {
                // reset the button text
                this.innerHTML = '更新<br>';
            });
        } else {
            console.log('waiting');
        }
    });
}
