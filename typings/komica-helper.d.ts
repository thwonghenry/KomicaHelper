interface Config {
    match: RegExp;
    quote?: RegExp;
    getThreads?: (doc: Document) => HTMLElement;
    getReplies?: (doc: Document) => HTMLElement;
    getThumbnails?: (doc: Document) => NodeListOf<Element>;
    getThumbnailSize?: (img: HTMLImageElement) => ThumbnailSize;
    enlargeThumbnail?: (img: HTMLImageElement) => void;
    setThumbnailSize?: (img: HTMLImageElement, size: ThumbnailSize) => void;
    getCreateNewElement?: (doc: Document) => HTMLElement;
    darkStyle?: string;
    [key: string]: any; // indicate the compile that the key is a string for looping
}

interface DefaultConfig extends Config {
    match: RegExp;
    quote: RegExp;
    getThreads: (doc: Document) => HTMLElement;
    getReplies: (doc: Document) => HTMLElement;
    getThumbnails: (doc: Document) => NodeListOf<Element>;
    getThumbnailSize: (img: HTMLImageElement) => ThumbnailSize;
    enlargeThumbnail: (img: HTMLImageElement) => void;
    setThumbnailSize: (img: HTMLImageElement, size: ThumbnailSize) => void;
    getCreateNewElement: (doc: Document) => HTMLElement;
    darkStyle: string;
}

interface LocalStyle {
    // ids
    komicaHelper: string;
    update: string;
    expand: string;
    contract: string;
    create: string;
    night: string;

    // classes
    disabledAnchor: string;
    threadButtons: string;
    floatingReply: string;
    createNew: string;
    hidden: string;

    // value
    newString: string;
}

interface ThumbnailSize {
    width: number;
    height: number;
}
