// update function after clicking update button
import Ajax from './Ajax';
import {bindReplyToQuote} from './quote';
import {injectThreadList} from './inject';

function createUpdateCallback(url: string, isThread: boolean, doc: HTMLDocument, floatsParent: HTMLElement = doc.body,
                              config: Config, floatClass: string): () => Promise<number> {
    'use strict';
    // initialize ajax object
    const ajax: Ajax = new Ajax('get', url, 'document');

    let newElements: HTMLElement;
    let oldElements: HTMLElement;
    let newChildren: HTMLCollection;
    let oldChildren: HTMLCollection;

    // decide whether the document is a thread list or a reply list
    const getElements: (doc: Document) => HTMLElement = isThread ? config.getThreads : config.getReplies;

    if (isThread) {
        return function(): Promise<number> {
            return ajax.start().then(
                (newDoc: Document) => {
                    newElements = getElements(newDoc);
                    oldElements = getElements(doc);
                    if (!newElements || !oldElements) {
                        console.error('Error when getting the document of ajax result');
                        return;
                    }
                    newChildren = newElements.children;
                    oldChildren = oldElements.children;
                    const diff: number = newChildren.length - oldChildren.length;

                    // compare the difference on the number of threads reply
                    const lastReply: Element = oldChildren[oldChildren.length - 2];

                    // insert the new replys from bottom of the new list to the bottom of the old list
                    for (let i: number = newChildren.length - 2, j: number = 0; i >= 0; i-- , j++) {
                        if (lastReply.id === newChildren[i].id) {
                            break;
                        } else {
                            oldElements.insertBefore(newChildren[i], oldChildren[oldChildren.length - 1 - j]);

                            // if the reply contains quote, bind the hover event
                            const qlinks: NodeListOf<Element> = doc.querySelectorAll(`${newChildren[i].id} .qlink`);
                            if (!qlinks) {
                                continue;
                            }
                            for (let k: number = 0; k < qlinks.length; k++) {
                                const qlink: HTMLAnchorElement = qlinks[k] as HTMLAnchorElement;
                                if (config.quote && config.quote.test(qlink.href)) {
                                    bindReplyToQuote(qlink, doc, floatsParent, floatClass);
                                }
                            }
                        }
                    }

                    // return the diff value
                    return new Promise<number>((resolve: (diff: number) => void) => {
                        resolve(diff);
                    });
                },
                () => console.log('rejected')
            );
        };
    } else {
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

                    // add all the hover events to the quote
                    const qlinks: NodeListOf<Element> = doc.getElementsByClassName('qlink');
                    for (let i: number = 0; i < qlinks.length; i++) {
                        const qlink: HTMLAnchorElement = qlinks[i] as HTMLAnchorElement;
                        if (config.quote && config.quote.test(qlink.href)) {
                            bindReplyToQuote(qlink, doc, floatsParent, floatClass);
                        }
                    }

                    // return the diff value
                    return new Promise<number>((resolve: (diff: number) => void) => {
                        resolve(0);
                    });
                },
                () => console.log('rejected')
            );
        };
    }
}

export function bindUpdateButton(url: string, isThread: boolean, doc: Document, menuButtons: HTMLElement,
                                 config: Config, locals: LocalStyle, updateButton: HTMLAnchorElement): void {
    'use strict';
    // create callback function
    const clickCallback: () => Promise<number> = createUpdateCallback(url, isThread, doc, menuButtons, config, locals.floatingReply);

    // store the id of setTimeout in the click event below for later clearTimeout
    let timeout: number = 0;

    updateButton.addEventListener('click', function(event: Event): void {
        event.preventDefault();

        // only invoke update function if it is not updating
        if (!(/disabledAnchor/.test(this.className))) {
            this.className += ` ${locals.disabledAnchor}`;
            this.innerHTML = '更新中..';

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
                        this.innerHTML = `更新(+${diff})`;
                        timeout = setTimeout(resolve, 5000);
                    } else {
                        // reset immediately
                        resolve();
                    }
                });
            }).then(() => {
                if (!isThread) {
                    const qlinks: NodeListOf<Element> = doc.getElementsByClassName('qlink');
                    const imgs: NodeListOf<Element> = config.getThumbnails(doc);
                    injectThreadList(qlinks, imgs, config, menuButtons, locals.floatingReply, doc);
                }
                // reset the button text
                this.innerHTML = '更新';
            });
        } else {
            console.log('waiting');
        }
    });
}
