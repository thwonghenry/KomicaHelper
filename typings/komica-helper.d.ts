declare namespace komicaHelper {
    interface Config {
        match: RegExp;
        quote?: RegExp;
        getThreads?: (doc: Document) => HTMLElement;
        getReplies?: (doc: Document) => HTMLElement;
        getThumbnails?: (doc: Document) => NodeListOf<Element>;
        getThumbnailSize?: (img: HTMLImageElement) => ThumbnailSize;
        enlargeThumbnail?: (img: HTMLImageElement) => void;
        setThumbnailSize?: (img: HTMLImageElement, size: ThumbnailSize) => void;
        getPostformElement?: (doc: Document) => HTMLElement;
        darkStyle?: string;
        isThread?: RegExp;
        getQLinks?: (doc: Document) => NodeListOf<Element>;
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
        getPostformElement: (doc: Document) => HTMLElement;
        darkStyle: string;
        isThread: RegExp;
        getQLinks: (doc: Document) => NodeListOf<Element>;
    }

    interface LocalStyle {
        // ids
        komicaHelper: string;
        update: string;
        expand: string;
        contract: string;
        postform: string;
        night: string;

        // classes
        disabledAnchor: string;
        threadButtons: string;
        floatingReply: string;
        createNew: string;
        hidden: string;
        hiddenButton: string;

        // value
        newString: string;
    }

    interface ThumbnailSize {
        width: number;
        height: number;
    }

    interface MenuButtons {
        menu: HTMLElement;
        updateButton: HTMLAnchorElement;
        expandAllButton: HTMLAnchorElement;
        contractAllButton: HTMLAnchorElement;
        postformButton: HTMLAnchorElement;
        nightModeButton: HTMLAnchorElement;
        locals: LocalStyle;
    }

    interface EnableMenuButtons {
        updateButton?: boolean;
        expandAllButton?: boolean;
        contractAllButton?: boolean;
        postformButton?: boolean;
        nightModeButton?: boolean;
    }
}
