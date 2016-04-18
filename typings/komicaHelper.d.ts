interface Config {
    match: RegExp,
    quote: RegExp
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
