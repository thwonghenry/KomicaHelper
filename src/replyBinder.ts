export function bindReply(anchor: HTMLAnchorElement, floatsParent: HTMLElement = document.body): void {

    // get all the quote element, a quote span may have multiple quote anchor points
    anchor.addEventListener('mouseover', function() {

        // get the quote id
        const matched: string[] = this.href.match(/.*#r([0-9]*).*/);
        if (!matched || matched.length < 2) {
            return;
        }
        const targetID: string = matched[1];

        // get the reply from the id
        const target: HTMLElement = document.getElementById('r' + targetID);
        if (!target) {
            return;
        }

        // clone the reply element, prevent duplicate ids and add float class
        let clone: HTMLElement = <HTMLElement> target.cloneNode(true);
        clone.id = '';
        clone.className += ' floatingReply';

        // position it near the quote anchor point element
        const rect: ClientRect = this.getBoundingClientRect();
        clone.setAttribute("style", `left: ${Math.round(rect.left + rect.width) }px; top: ${Math.round(rect.top) }px;`);
        floatsParent.appendChild(clone);

        // bind the mouseout event that destroy the clone element
        function removeElement(): void {
            if (clone) {
                floatsParent.removeChild(clone);
            }
            clone = null;
            this.removeEventListener('mouseout', removeElement);
        }
        this.addEventListener('mouseout', removeElement);
    });

}
