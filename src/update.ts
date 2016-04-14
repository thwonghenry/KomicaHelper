// update function after clicking update button
import { Ajax } from './Ajax';

export function createUpdateCallback(url: string, isThread: boolean, doc: HTMLDocument): () => Promise<number> {
    const ajax: Ajax = new Ajax('get', url);
    const implementation: DOMImplementation = document.implementation;
    const newDoc: HTMLDocument = implementation.createHTMLDocument("Temp");
    let div: HTMLElement = document.createElement('div');
    newDoc.body.appendChild(div);

    let newThreads: HTMLElement;
    let oldThreads: HTMLElement;
    let newChildren: HTMLCollection;
    let oldChildren: HTMLCollection;

    function initialize(htmlstring: string) {
        div.innerHTML = htmlstring;
        newThreads = newDoc.getElementById('threads');
        oldThreads = document.getElementById('threads');
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
                for (let i: number = newChildren.length - 2, j = 0; i >= 0; i-- , j++) {
                    if (lastReply.id === newChildren[i].id) {
                        break;
                    } else {
                        oldThreads.insertBefore(newChildren[i], oldChildren[oldChildren.length - 1 - j]);
                    }
                }
                return new Promise<number>((resolve: (number) => void) => {
                    resolve(diff);
                });
            }, () => console.log('rejected'));
        }
    } else {
        return function(): Promise<number> {
            return ajax.start().then((htmlstring: string) => {
                // create a new document to plug in the ajax result
                initialize(htmlstring);
                oldThreads.innerHTML = newThreads.innerHTML;
                return new Promise<number>((resolve: (number) => void) => {
                    resolve(0);
                });
            }, () => console.log('rejected'));
        }
    }
}
