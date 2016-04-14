/// reference path="../typings/require.d.ts"

import { Ajax } from './Ajax';

// initialize ajax updator
const url: string = window.location.href;
const ajax: Ajax = new Ajax('get', url);

// import assests
const style = require('!css!sass!./main.sass');
const css = style[0][1];

// render the html with local scoped id
const html = require('!jade!./buttons.jade')(style.locals);

// variables for easy access
const body: HTMLElement = document.body;
const createHTMLDocument = document.implementation.createHTMLDocument;

// update function after clicking update button
function update() {
    // start xml http request, returning a promise
    ajax.start().then((htmlstring) => {
        // create a new document to plug in the ajax result
        const newDoc = createHTMLDocument("Temp");
        let tempDiv: HTMLElement = document.createElement('div');
        tempDiv.innerHTML = htmlstring;
        newDoc.body.appendChild(tempDiv);

        // compare the difference on the number of threads reply
        const newThreads = newDoc.getElementById('threads');
        let oldThreads = document.getElementById('threads');
        const diff = newThreads.children.length - oldThreads.children.length;

        // replace the old thread to new thread
        oldThreads.innerHTML = newThreads.innerHTML;

        // remove "disabledAnchor" class for update button
        let classes = updateButton.className.split(' ');
        classes.splice(classes.length - 1, 1);
        updateButton.className = classes.join(' ');

        // update the text, showing the difference
        updateButton.innerHTML = '更新 (+' + diff + ')';
    }, () => {
            console.log('rejected');
        });
}

// add the style from main.sass
let styleTag: HTMLElement = document.createElement('style');
styleTag.innerHTML = css;
body.appendChild(styleTag);

// add the update button
let buttons: HTMLElement = document.createElement('div');
buttons.innerHTML = html;
body.appendChild(buttons);

// add the click event listner to the update button
let updateButton: Element = document.getElementById(style.locals.komica_helper).children[0];
updateButton.addEventListener('click', function(event) {
    event.preventDefault();
    // only invoke update function if it is not updating
    if (!(/disabledAnchor/.test(this.className))) {
        this.className += ' disabledAnchor';
        this.innerHTML = '更新中..';
        update();
    } else {
        console.log('waiting');
    }
});
