import {createUpdateCallback} from './update'
import {bindReply} from './replyBinder'
import {getConfigByURL} from './config'
import {bindImg} from './imgBinder'

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
const locals: LocalStyle = style.locals;

// render the html with local scoped id
const html: string = require('!jade!./buttons.jade')(locals);

const body: HTMLElement = document.body;

// add the style from main.sass
addHTMLToElement('style', css, body);
// add the update button
addHTMLToElement('div', html, body);

// the added buttons at the right
const newButtons: HTMLElement = document.getElementById(locals.komicaHelper);

// get the first button
let updateButton: HTMLAnchorElement = <HTMLAnchorElement> document.getElementById(locals.update);
let expandButton: HTMLAnchorElement = <HTMLAnchorElement> document.getElementById(locals.expand);
let contractButton: HTMLAnchorElement = <HTMLAnchorElement> document.getElementById(locals.contract);

const config: Config = getConfigByURL(url);

// create callback function
const isThread: boolean = /\?res=/.test(url);
const clickCallback: () => Promise<number> = createUpdateCallback(url, isThread, document, newButtons, config, locals);

// store the id of setTimeout in the click event below for later clearTimeout
let timeout: number = 0;

let buttons: HTMLButtonElement[] = [];
const imgs: NodeListOf<Element> = document.getElementsByClassName('img');

// common function to insert elements to the thread
function injectThreadList () {
    // bind all the hover events on quote element
    const qlinks: NodeListOf<Element> = document.getElementsByClassName('qlink');
    for (let i: number = 0; i < qlinks.length; i++) {
        const qlink: HTMLAnchorElement = <HTMLAnchorElement> qlinks[i];
        if (config.quote.test(qlink.href)) {
            bindReply(qlink, newButtons, locals);
        }
    }

    // inject the image button and store it to a list
    for (let i: number = 0; i < imgs.length; i++) {
        const img: HTMLImageElement = <HTMLImageElement> imgs[i];
        buttons.push(bindImg(img));
    }
}

// add the click event listner to the update button
updateButton.addEventListener('click', function(event: Event) {
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
                injectThreadList();
            }
            // reset the button text
            this.innerHTML = '更新';
        });
    } else {
        console.log('waiting');
    }
});

injectThreadList();

expandButton.addEventListener('click', function (event: Event) {
    event.preventDefault();
    // click all the enlarge button
    for (let i: number = 0; i < imgs.length; i++) {
        const button: HTMLButtonElement = buttons[i];
        if (button.innerHTML === '放大') {
            button.click();
        }
    }
});

contractButton.addEventListener('click', function (event: Event) {
    event.preventDefault();
    // click all the contract button
    for (let i: number = 0; i < imgs.length; i++) {
        const button: HTMLButtonElement = buttons[i];
        if (button.innerHTML === '縮小') {
            button.click();
        }
    }
});
