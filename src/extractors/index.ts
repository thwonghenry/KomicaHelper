import HomuExtractor from './HomuExtractor';

const extractors: komicaExtractor.Index[] = [{
    extractor: HomuExtractor,
    match: /http:\/\/homu\.komica\.org.*/,
}];

export = function getExtractorByUrl(url: string): komicaExtractor.ExtractorClass {
    'use strict';
    for (let i: number = 0; i < extractors.length; i++) {
        if (extractors[i].match.test(url)) {
            return extractors[i].extractor;
        }
    }
};
