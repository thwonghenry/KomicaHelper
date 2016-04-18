import {Ajax} from './Ajax';

let cache: { [name: string]: HTMLDocument; } = {};
let getting: { [name: string]: boolean } = {};
export function bindReply(anchor: HTMLAnchorElement, floatsParent: HTMLElement = document.body, locals: LocalStyle): void {

    // get all the quote element, a quote span may have multiple quote anchor points
    anchor.addEventListener('mouseover', function() {

        // get the quote id
        const matched: RegExpMatchArray = this.href.match(/.*#r([0-9]*).*/);
        if (!matched || matched.length < 2) {
            return;
        }
        const targetID: string = matched[1];

        // common function for after ajax loading or normal operation
        const stickReply = (reply: HTMLElement): void => {
            let clone: HTMLElement;
            if (reply) {
                // clone the reply element, prevent duplicate ids and add float class
                clone = <HTMLElement> reply.cloneNode(true);
                clone.removeAttribute('id');

                // if the reply is the post, add the reply class
                if (/threadpost/.test(clone.className)) {
                    clone.className += ' reply';

                    // remove the warn text
                    const toplevel: HTMLElement = <HTMLElement> clone.children[0];
                    const children: HTMLCollection = toplevel.children;
                    const warnSpan: Element = children[children.length - 2];
                    if (warnSpan.tagName.toLowerCase() === 'span') {
                        toplevel.removeChild(warnSpan);
                    }
                }
                clone.className += ` ${locals.floatingReply}`;

                // position it near the quote anchor point element
                const rect: ClientRect = this.getBoundingClientRect();
                clone.setAttribute('style', `left: ${Math.round(rect.left + rect.width) }px; top: ${Math.round(rect.top) }px;`);
                floatsParent.appendChild(clone);
            }

            // bind the mouseout event that destroy the clone element
            // if clone is undefined, still need it to remove "hovering" attribute
            function removeElement(): void {
                if (clone) {
                    floatsParent.removeChild(clone);
                }
                clone = null;
                this.removeAttribute('hovering');
                this.removeEventListener('mouseout', removeElement);
            }
            this.addEventListener('mouseout', removeElement);
        }

        let target: HTMLElement = document.getElementById('r' + targetID);

        // if the reply is hide inside the thread, continue
        if (!target) {
            const threadIDmatch: RegExpMatchArray = this.href.match(/.res=([0-9]*).*/);
            if (!threadIDmatch || threadIDmatch.length !== 2) {
                return;
            }
            const threadID = threadIDmatch[1];

            // check if the thread is cached and the target is in the cache
            if (cache[threadID] && (target = cache[threadID].getElementById('r' + targetID))) {

            } else if (!getting[threadID]) {

                // lock the ajax attempt
                getting[threadID] = true;

                // override the cursor pointer to loading animation
                this.setAttribute('style', 'cursor: wait;');

                // start ajax loading the thread internally
                const ajax: Ajax = new Ajax('get', this.href);
                ajax.start().then((htmlstring: string) => {

                    // create the new threaad document
                    const implementation: DOMImplementation = document.implementation;
                    const newDoc: HTMLDocument = implementation.createHTMLDocument("Temp");
                    let div: HTMLElement = document.createElement('div');
                    div.innerHTML = htmlstring;
                    newDoc.body.appendChild(div);
                    cache[threadID] = newDoc;

                    // unlock ajax attempt
                    delete getting[threadID];

                    // remove loading animation
                    this.removeAttribute('style');

                    // if this quote is still hovered, stick the reply immediately
                    if (this.getAttribute('hovering')) {
                        stickReply(newDoc.getElementById('r' + targetID));
                    }
                });
            }
        }
        stickReply(target);
        // set custom hovering attribute for after ajax loading
        this.setAttribute('hovering', 'true');
    });

}
