import {Ajax} from './Ajax';

// a function that stick the reply element near the quote
function stickReply(quote: HTMLElement, reply: HTMLElement, floatClass: string, floatsParent: HTMLElement): void {
    'use strict';
    let clone: HTMLElement;
    if (reply) {
        // clone the reply element, prevent duplicate ids and add float class
        clone = reply.cloneNode(true) as HTMLElement;
        clone.removeAttribute('id');

        // if the reply is the post, add the reply class
        if (/threadpost/.test(clone.className)) {
            clone.className += ' reply';

            // remove the warn text
            const toplevel: HTMLElement = clone.children[0] as HTMLElement;
            const children: HTMLCollection = toplevel.children;
            const warnSpan: Element = children[children.length - 2];
            if (warnSpan.tagName.toLowerCase() === 'span') {
                toplevel.removeChild(warnSpan);
            }
        }
        clone.className += ` ${floatClass}`;

        // position it near the reply element
        const rect: ClientRect = quote.getBoundingClientRect();
        clone.setAttribute('style', `left: ${Math.round(rect.left + rect.width) }px; top: ${Math.round(rect.top) }px;`);
        floatsParent.appendChild(clone);
    }

    // bind the mouseout event that destroy the clone element
    // if clone is undefined, still need it to remove "hovering" attribute
    function removeElement(): void {
        if (clone) {
            floatsParent.removeChild(clone);
        }
        clone = undefined;
        quote.removeAttribute('hovering');
        quote.removeEventListener('mouseout', removeElement);
    }
    quote.addEventListener('mouseout', removeElement);
}

// the threads cache
let cache: { [threadID: string]: HTMLDocument; } = {};

// the locks of ajax call for thread document
let getting: { [threadID: string]: boolean } = {};

export function bindReplyToQuote(anchor: HTMLAnchorElement, doc: Document, floatsParent: HTMLElement = doc.body, floatClass: string): void {
    'use strict';
    // get all the quote element, a quote span may have multiple quote anchor points

    const matched: RegExpMatchArray = anchor.href.match(/.*#r([0-9]*).*/);
    if (!matched || matched.length < 2) {
        return;
    }
    const targetID: string = matched[1];

    anchor.addEventListener('mouseover', function(): void {

        let target: HTMLElement = doc.getElementById(`r${targetID}`);
        if (!target) {
            // if the reply is hide inside the thread
            // get the thread ID
            const threadIDmatch: RegExpMatchArray = this.href.match(/.res=([0-9]*).*/);
            if (!threadIDmatch || threadIDmatch.length !== 2) {
                return;
            }
            const threadID: string = threadIDmatch[1];

            // check if the thread is cached and the target is in the cache
            if (!cache[threadID] && !getting[threadID]) {

                // lock the ajax attempt
                getting[threadID] = true;

                // set the cursor pointing this quote to loading animation
                this.setAttribute('style', 'cursor: wait;');

                // start ajax loading the thread
                const ajax: Ajax = new Ajax('get', this.href, 'document');
                ajax.start().then((newDoc: Document) => {

                    cache[threadID] = newDoc;

                    // unlock ajax attempt
                    delete getting[threadID];

                    // remove loading animation
                    this.removeAttribute('style');

                    // if this quote is still hovered, stick the reply immediately
                    if (this.getAttribute('hovering')) {
                        stickReply(this, newDoc.getElementById('r' + targetID), floatClass, floatsParent);
                    }
                });
            } else if (cache[threadID]) {
                target = cache[threadID].getElementById(`r${targetID}`);
            }
        }

        // stick the quoted reply near the quote
        stickReply(this, target, floatClass, floatsParent);

        // set custom hovering attribute for after ajax loading
        this.setAttribute('hovering', 'true');
    });
}
