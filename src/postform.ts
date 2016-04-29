import getConfigByURL from './config';

let isHiding: boolean = true;
let locals: komicaHelper.LocalStyle;
let postForm: HTMLElement;

// bind the post button function
export function bindPostButton(createButton: HTMLAnchorElement): void {
    'use strict';
    createButton.addEventListener('click', function(event: Event): void {
        event.preventDefault();
        if (isHiding) {
            // remove the 'hidden' class, show the post form
            let classNames: string[] = postForm.className.split(' ');
            classNames.splice(classNames.length - 1, 1);
            postForm.className = classNames.join(' ');
        } else {
            // add the 'hidden' class to hide the form
            postForm.className += ` ${locals.hidden}`;
        }
        // toggle the state
        isHiding = !isHiding;
    });
}

export default function initializePostform(config: komicaHelper.Config = getConfigByURL(window.location.href)): void {
    'use strict';
    // import the css
    const style: any = require('!css!sass!../styles/postform.sass');
    const css: string = style[0][1];
    locals = style.locals;

    // append the style
    let styleTag: HTMLElement = document.createElement('style');
    styleTag.innerHTML = css;
    document.body.appendChild(styleTag);

    postForm = config.getPostformElement(document);
    if (postForm) {
        postForm.className += `${locals.createNew} ${locals.hidden}`;
    }
}
