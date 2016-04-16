import {createUpdateCallback} from './update.ts'
import {bindReply} from './replyBinder.ts'

// a function that add html as DOM node to element
function addHTMLToElement(tag: string, html: string, element: HTMLElement): void {
    let node = document.createElement(tag);
    node.innerHTML = html;
    element.appendChild(node);
}

// initialize ajax updator
const url: string = window.location.href;

// import assests
const style = require('!css!sass!./main.sass');
const css: string = style[0][1];

// render the html with local scoped id
const html: string = require('!jade!./buttons.jade')(style.locals);

const body: HTMLElement = document.body;

// add the style from main.sass
addHTMLToElement('style', css, body);
// add the update button
addHTMLToElement('div', html, body);

// the added buttons at the right
const newButtons: HTMLElement = document.getElementById(style.locals.komica_helper);

// get the first button
let updateButton: Element = newButtons.children[0];

// create callback function
const isThread: boolean = /\?res=/.test(url);
const clickCallback: () => Promise<number> = createUpdateCallback(url, isThread, document, newButtons);

// store the id of setTimeout in the click event below for later clearTimeout
let timeout: number = 0;

// add the click event listner to the update button
updateButton.addEventListener('click', function(event: Event) {
    event.preventDefault();

    // only invoke update function if it is not updating
    if (!(/disabledAnchor/.test(this.className))) {
        this.className += ' disabledAnchor';
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

            // reset the button text
            this.innerHTML = '更新';
        });
    } else {
        console.log('waiting');
    }
});

// bind all the hover events on quote element
const qlinks: NodeListOf<Element> = document.getElementsByClassName('qlink');
for (let i: number = 0; i < qlinks.length; i++) {
    const qlink: HTMLAnchorElement = <HTMLAnchorElement> qlinks[i];
    let regex: RegExp;
    if (/^((?!page_num).)*#r[0-9]*/.test(qlink.href)) {
        bindReply(qlink, newButtons);
    }
}
