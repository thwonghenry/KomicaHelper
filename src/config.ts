function getElementById(id: string, doc: Document): HTMLElement {
    'use strict';
    return doc.getElementById(id);
}

function getElementsByTagName(tag: string, doc: Document): NodeListOf<Element> {
    'use strict';
    return doc.getElementsByTagName(tag);
}

function getElementByTagNameIndex(tag: string, index: number, doc: Document): HTMLElement {
    'use strict';
    const tags: NodeListOf<Element> = getElementsByTagName(tag, doc);
    if (tags) {
        return tags[index] as HTMLElement;
    }
    return undefined;
}

function getElementsByQuery(query: string, doc: Document): NodeListOf<Element> {
    'use strict';
    return doc.querySelectorAll(query);
}

function getThumbnailSizeByStyle(img: HTMLImageElement): ThumbnailSize {
    'use strict';
    const style: CSSStyleDeclaration = img.style;
    return {
        height: parseInt(style.height, 10),
        width: parseInt(style.width, 10),
    };
}

function enlargeThumbnailByStyle(img: HTMLImageElement): void {
    'use strict';
    img.setAttribute('style', 'max-width: 95%; float: none;');
}

function setThumbnailSizeByStyle(img: HTMLImageElement, size: ThumbnailSize): void {
    'use strict';
    img.setAttribute('style', `width: ${size.width}px; height: ${size.height}px`);
}

function getThumbnailSizeByAttribute(img: HTMLImageElement): ThumbnailSize {
    'use strict';
    return {
        height: img.height,
        width: img.width,
    };
}

function enlargeThumbnailByAttribute(img: HTMLImageElement): void {
    'use strict';
    img.setAttribute('style', 'max-width: 95%;');
    img.removeAttribute('height');
    img.removeAttribute('width');
    img.removeAttribute('align');
}

function setThumbnailSizeByAttribute(img: HTMLImageElement, size: ThumbnailSize): void {
    'use strict';
    img.removeAttribute('style');
    img.width = size.width;
    img.height = size.height;
    img.align = 'left';
}

function extendConfig(oldConfig: Config, newConfig: Config): void {
    'use strict';
    for (const key in newConfig) {
        if (!oldConfig.hasOwnProperty(key)) {
            console.log('extending', key);
            oldConfig[key] = newConfig[key];
        }
    }
}

const defaultConfig: DefaultConfig = {
    darkStyle: require('!css!sass!./styles/dark/default.sass')[0][1],
    enlargeThumbnail: enlargeThumbnailByStyle,
    getCreateNewElement: getElementById.bind(undefined, 'postform_main'),
    getReplies: getElementById.bind(undefined, 'threads'),
    getThreads: getElementById.bind(undefined, 'threads'),
    getThumbnailSize: getThumbnailSizeByStyle,
    getThumbnails: getElementsByQuery.bind(undefined, '#threads img'),
    match: /.*/,
    quote: /^((?!page_num).)*#r[0-9]*/,
    setThumbnailSize: setThumbnailSizeByStyle,
};

const configs: Config[] = [
    {
        match: /http:\/\/.*\.mykomica\.org.*/,
        quote: /.*#r[0-9]*/,
    }, {
        darkStyle: require('!css!sass!./styles/dark/homu.sass')[0][1],
        enlargeThumbnail: enlargeThumbnailByAttribute,
        getCreateNewElement: getElementByTagNameIndex.bind(undefined, 'form', 0),
        getReplies: getElementByTagNameIndex.bind(undefined, 'form', 1),
        getThreads: getElementByTagNameIndex.bind(undefined, 'form', 1),
        getThumbnailSize: getThumbnailSizeByAttribute,
        getThumbnails: getElementsByTagName.bind(undefined, 'img'),
        match: /http:\/\/homu\.komica\.org.*/,
        quote: /.*#r[0-9]*/,
        setThumbnailSize: setThumbnailSizeByAttribute,
    }, {
        darkStyle: require('!css!sass!./styles/dark/homu.sass')[0][1],
        enlargeThumbnail: enlargeThumbnailByAttribute,
        getCreateNewElement: getElementByTagNameIndex.bind(undefined, 'form', 0),
        getReplies: getElementByTagNameIndex.bind(undefined, 'form', 1),
        getThreads: getElementByTagNameIndex.bind(undefined, 'body', 0),
        getThumbnailSize: getThumbnailSizeByAttribute,
        getThumbnails: getElementsByTagName.bind(undefined, 'img'),
        match: /http:\/\/pink\.komica\.org.*/,
        quote: /.*#r[0-9]*/,
        setThumbnailSize: setThumbnailSizeByAttribute,
    },
];

export function getConfigByURL(url: string): Config {
    'use strict';
    for (let i: number = 0; i < configs.length; i++) {
        let config: Config = configs[i];
        if (config.match.test(url)) {
            extendConfig(config, defaultConfig);
            return config;
        }
    }
    console.log('using default config');
    return defaultConfig;
}
