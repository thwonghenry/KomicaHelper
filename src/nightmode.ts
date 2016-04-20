// get the night mode state from local storage
let isNight: boolean = localStorage && localStorage.getItem('night') === 'true';

export function bindNightModeButton(doc: Document, darkStyle: string, nightButton: HTMLAnchorElement): void {
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
