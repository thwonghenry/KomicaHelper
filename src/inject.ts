import {bindReplyToQuote} from './quote';
import {bindThumbnail, resetButtons} from './thumbnail';

export function injectThreadList(qlinks: NodeListOf<Element>, imgs: NodeListOf<Element>,
                                 config: Config, menuButtons: HTMLElement, floatClass: string, doc: Document): void {
    'use strict';
    // bind all the hover events on quote element

    if (qlinks) {
        for (let i: number = 0; i < qlinks.length; i++) {
            const qlink: HTMLAnchorElement = qlinks[i] as HTMLAnchorElement;
            if (config.quote.test(qlink.href)) {
                bindReplyToQuote(qlink, doc, menuButtons, floatClass);
            }
        }
    }

    resetButtons();
    // inject the image button and store it to a list
    for (let i: number = 0; i < imgs.length; i++) {
        const img: HTMLImageElement = imgs[i] as HTMLImageElement;
        bindThumbnail(img, config, doc);
    }
}
