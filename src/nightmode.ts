import getConfigByURL from './config';

// get the night mode state from local storage
let isNight: boolean = localStorage && localStorage.getItem('night') === 'true';
let darkStyle: string;

// bind the toggle button function
export function bindNightModeButton(doc: Document, nightButton: HTMLAnchorElement): void {
    'use strict';
    // create the night mode style element
    let nightStyle: HTMLStyleElement = doc.createElement('style');
    nightStyle.innerHTML = darkStyle;

    // recover the night mode state
    if (isNight) {
        doc.body.appendChild(nightStyle);
    }

    nightButton.addEventListener('click', function(event: Event): void {
        event.preventDefault();
        if (isNight) {
            doc.body.removeChild(nightStyle);
        } else {
            doc.body.appendChild(nightStyle);
        }
        // toggle the night mode state
        isNight = !isNight;
        if (localStorage) {
            // update the state to the local storage
            localStorage.setItem('night', isNight ? 'true' : 'false');
        }
    });
}

const url: string = window.location.href;
// initialize this module by providing the dark style of this board
export default function initializeNightMode(darkStyleString: string = getConfigByURL(url).darkStyle): void {
    'use strict';
    darkStyle = darkStyleString;
}
