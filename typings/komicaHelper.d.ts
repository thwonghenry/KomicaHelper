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
