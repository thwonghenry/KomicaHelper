import {Promise} from 'es6-promise';

class Ajax implements _Ajax {
    method: string
    url: string
    xhr: XMLHttpRequest

    constructor(method: string, url: string) {
        this.method = method;
        this.url = url;
        this.xhr = new XMLHttpRequest();
    }

    start(): Promise<string> {
        const onLoad = new Promise<string>((resolve: (response: string) => any, reject: () => any) => {
            this.xhr.onreadystatechange = () => {
                const state: number = this.xhr.readyState;
                if (state === XMLHttpRequest.DONE) {
                    if (this.xhr.status === 200 || this.xhr.status === 304) {
                        resolve(this.xhr.responseText);
                    } else {
                        reject();
                    }
                }
            }
        });
        this.xhr.open(this.method, this.url, true);
        this.xhr.send(null);
        return onLoad;
    }
}

export { Ajax };
