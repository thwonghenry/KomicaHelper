declare namespace komicaHelper {
    interface Config {
        match: RegExp;
        quote?: RegExp;
        getThreads?: (doc: Document) => HTMLElement;
        getReplies?: (doc: Document) => HTMLElement;
        getThumbnails?: (doc: Document) => NodeListOf<Element>;
        getPostformElement?: (doc: Document) => HTMLElement;
        darkStyle?: any;
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
        getPostformElement: (doc: Document) => HTMLElement;
        darkStyle: any;
        isThread: RegExp;
        getQLinks: (doc: Document) => NodeListOf<Element>;
    }

    interface LocalStyle {
        // ids
        komicaHelper: string;
        update: string;
        expand: string;
        contract: string;
        night: string;

        // classes
        disabledAnchor: string;
        threadButtons: string;
        floatingReply: string;
        createNew: string;
        hidden: string;
        hiddenButton: string;
        expanded: string;
        contracted: string;

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
        nightModeButton: HTMLAnchorElement;
        locals: LocalStyle;
    }

    interface EnableMenuButtons {
        updateButton?: boolean;
        expandAllButton?: boolean;
        contractAllButton?: boolean;
        nightModeButton?: boolean;
    }

    interface Setting {
        value: any;
        timestamp: string;
    }
}
