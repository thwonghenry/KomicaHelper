// update function after clicking update button
import { Ajax } from './Ajax';
import {bindReply} from './replyBinder'

export function createUpdateCallback(url: string, isThread: boolean, doc: HTMLDocument, floatsParent: HTMLElement = document.body, config: Config): () => Promise<number> {
    const ajax: Ajax = new Ajax('get', url);
    const implementation: DOMImplementation = doc.implementation;
    const newDoc: HTMLDocument = implementation.createHTMLDocument("Temp");
    let div: HTMLElement = doc.createElement('div');
    newDoc.body.appendChild(div);

    let newThreads: HTMLElement;
    let oldThreads: HTMLElement;
    let newChildren: HTMLCollection;
    let oldChildren: HTMLCollection;

    function initialize(htmlstring: string) {
        div.innerHTML = htmlstring;
        newThreads = newDoc.getElementById('threads');
        oldThreads = doc.getElementById('threads');
        newChildren = newThreads.children;
        oldChildren = oldThreads.children;
    }

    if (isThread) {
        return function(): Promise<number> {
            return ajax.start().then((htmlstring: string) => {

                // create a new document to plug in the ajax result
                initialize(htmlstring);
                const diff: number = newChildren.length - oldChildren.length;

                // compare the difference on the number of threads reply
                const lastReply: Element = oldChildren[oldChildren.length - 2];

                // insert the new replys from bottom of the new list to the bottom of the old list
                for (let i: number = newChildren.length - 2, j: number = 0; i >= 0; i-- , j++) {
                    if (lastReply.id === newChildren[i].id) {
                        break;
                    } else {
                        oldThreads.insertBefore(newChildren[i], oldChildren[oldChildren.length - 1 - j]);

                        // if the reply contains quote, bind the hover event
                        const qlinks: NodeListOf<Element> = doc.querySelectorAll(`${newChildren[i].id} .qlink`);
                        if (qlinks) {
                            for (let k: number = 0; k < qlinks.length; k++) {
                                const qlink: HTMLAnchorElement = <HTMLAnchorElement> qlinks[k];
                                if (config.quote.test(qlink.href)) {
                                    bindReply(qlink, floatsParent);
                                }
                            }
                        }
                    }
                }

                // return the diff value
                return new Promise<number>((resolve: (diff: number) => void) => {
                    resolve(diff);
                });
            }, () => console.log('rejected'));
        }
    } else {
        return function(): Promise<number> {
            return ajax.start().then((htmlstring: string) => {
                // create a new document to plug in the ajax result
                initialize(htmlstring);

                // TODO: design a more efficient way to do the belows
                // update the whole page
                oldThreads.innerHTML = newThreads.innerHTML;

                // add all the hover events to the quote
                const qlinks: NodeListOf<Element> = document.getElementsByClassName('qlink');
                for (let i: number = 0; i < qlinks.length; i++) {
                    const qlink: HTMLAnchorElement = <HTMLAnchorElement> qlinks[i];
                    if (config.quote.test(qlink.href)) {
                        bindReply(qlink, floatsParent);
                    }
                }

                return new Promise<number>((resolve: (diff: number) => void) => {
                    resolve(0);
                });
            }, () => console.log('rejected'));
        }
    }
}
