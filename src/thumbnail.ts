let buttons: HTMLButtonElement[] = [];

export function bindThumbnail(img: HTMLImageElement, config: Config, doc: Document): void {
    'use strict';
    // create the button element for image function
    let button: HTMLButtonElement = doc.createElement('button');
    button.innerHTML = '放大';

    // insert the button alongside with the image
    let anchor: HTMLAnchorElement = img.parentNode as HTMLAnchorElement;
    anchor.parentNode.insertBefore(button, anchor.nextSibling);

    // indicate whether the image is loaded
    let loaded: boolean = false;

    // use for breaking line between the enlarged image and the reply
    let br: HTMLBRElement = doc.createElement('br');

    // save the size of the thumbnail for restoring later
    const size: ThumbnailSize = config.getThumbnailSize(img);
    button.addEventListener('click', function(event: Event): void {
        event.preventDefault();

        // enlarge the image
        if (button.innerHTML === '放大') {
            // common function
            function enlarge(): void {
                config.enlargeThumbnail(img);
                anchor.parentNode.insertBefore(br, button);
                button.innerHTML = '縮小';
            }
            // if the image is not loaded before, load it
            if (!loaded) {
                // enlarge the image only after loading the image;
                function onLoad(): void {
                    loaded = true;
                    button.removeAttribute('disabled');
                    img.removeEventListener('load', onLoad);
                    enlarge();
                }
                // disable the button before loading
                button.innerHTML = '載入中...';
                button.setAttribute('disabled', '');
                img.addEventListener('load', onLoad);

                // load the image
                img.src = anchor.href;
            } else {
                enlarge();
            }
        } else if (button.innerHTML === '縮小') {
            // restore the image and button
            config.setThumbnailSize(img, size);
            anchor.parentNode.removeChild(br);
            button.innerHTML = '放大';
        }
    });
    buttons.push(button);
}

export function resetButtons(): void {
    'use strict';
    // reset the button list by setting empty array
    buttons = [];
}

export function bindThumbnailControlButtons(expandButton: HTMLAnchorElement, contractButton: HTMLAnchorElement): void {
    'use strict';

    // bind the button that expand all unexpanded thumbnails
    expandButton.addEventListener('click', function(event: Event): void {
        event.preventDefault();
        // click all the enlarge button
        for (let i: number = 0; i < buttons.length; i++) {
            const button: HTMLButtonElement = buttons[i];
            if (button.innerHTML === '放大') {
                button.click();
            }
        }
    });

    // bind the button that expand all expanded thumbnails
    contractButton.addEventListener('click', function(event: Event): void {
        event.preventDefault();
        // click all the contract button
        for (let i: number = 0; i < buttons.length; i++) {
            const button: HTMLButtonElement = buttons[i];
            if (button.innerHTML === '縮小') {
                button.click();
            }
        }
    });
}
