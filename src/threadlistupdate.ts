// update function after clicking update button
import Ajax from './Ajax';

function createUpdateCallback(url: string, doc: HTMLDocument, floatsParent: HTMLElement = doc.body,
    config: komicaHelper.Config, floatClass: string): () => Promise<number> {

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
                oldElements = getElements(doc);
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

export default function bindUpdateButton(url: string, doc: Document, menuButtons: HTMLElement,
    config: komicaHelper.Config, locals: komicaHelper.LocalStyle, updateButton: HTMLAnchorElement): void {

    'use strict';
    // create callback function
    const clickCallback: () => Promise<number> = createUpdateCallback(url, doc, menuButtons, config, locals.floatingReply);

    // store the id of setTimeout in the click event below for later clearTimeout
    let timeout: number = 0;

    updateButton.addEventListener('click', function(event: Event): void {
        event.preventDefault();

        // only invoke update function if it is not updating
        if (!(/disabledAnchor/.test(this.className))) {
            this.className += ` ${locals.disabledAnchor}`;
            this.innerHTML = '更新中..<br>';

            // remove any timeout that is started before
            if (timeout) {
                clearTimeout(timeout);
            }
            clickCallback().then((diff: number) => {

                // remove the "disabledAnchor" class
                let classes: string[] = this.className.split(' ');
                classes.splice(classes.length - 1, 1);
                this.className = classes.join(' ');

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
