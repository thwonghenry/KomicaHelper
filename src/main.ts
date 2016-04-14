/// reference path="../typings/require.d.ts"
import {createUpdateCallback} from './update.ts'

// initialize ajax updator
const url: string = window.location.href;

// import assests
const style = require('!css!sass!./main.sass');
const css: string = style[0][1];

// render the html with local scoped id
const html: string = require('!jade!./buttons.jade')(style.locals);

// variables for easy access
const body: HTMLElement = document.body;

// add the style from main.sass
let styleTag: HTMLElement = document.createElement('style');
styleTag.innerHTML = css;
body.appendChild(styleTag);

// add the update button
let buttons: HTMLElement = document.createElement('div');
buttons.innerHTML = html;
body.appendChild(buttons);

let updateButton: Element = document.getElementById(style.locals.komica_helper).children[0];

// create callback function
const clickCallback: () => Promise<number> = createUpdateCallback(url, /pixmicat\.php/.test(url), document);

// add the click event listner to the update button
updateButton.addEventListener('click', function(event) {
    event.preventDefault();
    // only invoke update function if it is not updating
    if (!(/disabledAnchor/.test(this.className))) {
        this.className += ' disabledAnchor';
        this.innerHTML = '更新中..';
        clickCallback().then((diff: number) => {
            let classes: string[] = this.className.split(' ');
            classes.splice(classes.length - 1, 1);
            this.className = classes.join(' ');

            // update the text, showing the difference
            this.innerHTML = `更新${diff === 0 ? '' : `(+${diff})`}`;
        });
    } else {
        console.log('waiting');
    }
});
