import HomuExtractor from '../HomuExtractor';

function init(): void {
    'use strict';
    const extractor: komicaExtractor.Extractor = new HomuExtractor(window.location.host);
    if (/.*\.php\?res=.*/.test(window.location.href)) {
        console.log(extractor.extractReplyList(document));
    } else {
        console.log(extractor.extractThreadList(document));
    }
}

window.addEventListener('load', init);
