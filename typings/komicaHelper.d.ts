interface Config {
    match: RegExp;
    quote: RegExp;
    getThreads: (doc: Document) => HTMLElement;
    getReplies: (doc: Document) => HTMLElement;
    getThumbnailSize: (img: HTMLImageElement) => ThumbnailSize;
    enlargeThumbnail: (img: HTMLImageElement) => void;
    setThumbnailSize: (img: HTMLImageElement, size: ThumbnailSize) => void;
}

interface _Ajax {
    method: string;
    url: string;
    xhr: XMLHttpRequest;
    start(): Promise<string>;
}

interface LocalStyle {
    // ids
    komicaHelper: string;
    update: string,
    expand: string,
    contract: string

    // classes
    disabledAnchor: string;
    threadButtons: string;
    floatingReply: string;

}

interface ThumbnailSize {
    width: number;
    height: number;
}
