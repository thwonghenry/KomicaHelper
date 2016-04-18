export function bindImg(img: HTMLImageElement): HTMLButtonElement {
    // create the button element for image function
    let button: HTMLButtonElement = document.createElement('button');
    button.innerHTML = '放大';

    // insert the button alongside with the image
    let anchor: HTMLAnchorElement = <HTMLAnchorElement> img.parentNode;
    anchor.parentNode.insertBefore(button, anchor.nextSibling);

    // indicate whether the image is loaded
    let loaded = false;

    // save the size of the thumbnail for restoring later
    const size = img.getAttribute('style');
    button.addEventListener('click', function(event: Event) {
        event.preventDefault();

        // enlarge the image
        if (button.innerHTML === '放大') {
            // common function
            function enlarge() {
                img.setAttribute('style', 'width: 100%;');
                button.innerHTML = '縮小';
            }
            // if the image is not loaded before, load it
            if (!loaded) {
                // enlarge the image only after loading the image;
                function onLoad() {
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
            img.setAttribute('style', size);
            button.innerHTML = '放大';
        }
    });
    return button;
}
