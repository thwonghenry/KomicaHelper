function getElementById (id: string, doc: Document): HTMLElement {
    return doc.getElementById(id);
}

function getElementsByTagName (tag: string, doc: Document): NodeListOf<Element> {
    return doc.getElementsByTagName(tag);
}

function getElementByTagNameIndex (tag: string, index: number, doc: Document): HTMLElement {
    const tags: NodeListOf<Element> = getElementsByTagName(tag, doc);
    if (tags) {
        return <HTMLElement> tags[index];
    }
    return undefined;
}

function getThumbnailSizeByStyle (img: HTMLImageElement): ThumbnailSize {
    const style = img.style;
    return {
        width: parseInt(style.width),
        height: parseInt(style.height)
    }
}

function enlargeThumbnailByStyle (img: HTMLImageElement): void {
    img.setAttribute('style', 'maxwidth: 100%; float: none;');
}

function setThumbnailSizeByStyle (img: HTMLImageElement, size: ThumbnailSize): void {
    img.setAttribute('style', `width: ${size.width}px; height: ${size.height}px`);
}

function getThumbnailSizeByAttribute (img: HTMLImageElement): ThumbnailSize {
    return {
        width: img.width,
        height: img.height
    };
}

function enlargeThumbnailByAttribute (img: HTMLImageElement): void {
    img.setAttribute('maxwidth', '100%');
    img.removeAttribute('height');
    img.removeAttribute('width');
    img.removeAttribute('align');
}

function setThumbnailSizeByAttribute (img: HTMLImageElement, size: ThumbnailSize): void {
    img.width = size.width;
    img.height = size.height;
    img.align = 'left';
}

const configs: Config[] = [{
        match: /default/,
        quote: /^((?!page_num).)*#r[0-9]*/,
        getThreads: getElementById.bind(undefined, 'threads'),
        getReplies: getElementById.bind(undefined, 'threads'),
        getThumbnailSize: getThumbnailSizeByStyle,
        enlargeThumbnail: enlargeThumbnailByStyle,
        setThumbnailSize: setThumbnailSizeByStyle
    }, {
        match: /http:\/\/.*\.mykomica\.org.*/,
        quote: /.*#r[0-9]*/,
        getThreads: getElementById.bind(undefined, 'threads'),
        getReplies: getElementById.bind(undefined, 'threads'),
        getThumbnailSize: getThumbnailSizeByStyle,
        enlargeThumbnail: enlargeThumbnailByStyle,
        setThumbnailSize: setThumbnailSizeByStyle
    }, {
        match: /http:\/\/homu\.komica\.org.*/,
        quote: /.*#r[0-9]*/,
        getThreads: getElementByTagNameIndex.bind(undefined, 'form', 1),
        getReplies: getElementByTagNameIndex.bind(undefined, 'form', 1),
        getThumbnailSize: getThumbnailSizeByAttribute,
        enlargeThumbnail: enlargeThumbnailByAttribute,
        setThumbnailSize: setThumbnailSizeByAttribute
    }, {
        match: /http:\/\/pink\.komica\.org.*/,
        quote: /.*#r[0-9]*/,
        getThreads: getElementByTagNameIndex.bind(undefined, 'body', 0),
        getReplies: getElementByTagNameIndex.bind(undefined, 'form', 1),
        getThumbnailSize: getThumbnailSizeByAttribute,
        enlargeThumbnail: enlargeThumbnailByAttribute,
        setThumbnailSize: setThumbnailSizeByAttribute
    }
];

export function getConfigByURL(url: string): Config {
    for (let i = 0; i < configs.length; i++) {
        const config: Config = configs[i];
        if (config.match.test(url)) {
            return config;
        }
    }
    return configs[0];
}
