// bind the new post button
let isHiding: boolean = true;
export function bindPostButton(hiddenClass: string, createButton: HTMLAnchorElement, createNewForm: HTMLElement): void {
    'use strict';
    createButton.addEventListener('click', function(event: Event): void {
        event.preventDefault();
        if (isHiding) {
            // remove the 'hidden' class, show the post form
            let classNames: string[] = createNewForm.className.split(' ');
            classNames.splice(classNames.length - 1, 1);
            createNewForm.className = classNames.join(' ');
        } else {
            // add the 'hidden' class to hide the form
            createNewForm.className += ` ${hiddenClass}`;
        }
        // toggle the state
        isHiding = !isHiding;
    });
}
