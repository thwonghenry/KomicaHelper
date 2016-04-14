import {Promise} from 'es6-promise';

interface Ajax {
    method: string;
    url: string;
    xhr: XMLHttpRequest;
    onLoad: () => void;
}

class Ajax {
    constructor(method: string, url: string) {
        this.method = method;
        this.url = url;
        this.xhr = new XMLHttpRequest();
    }

    start(): Promise<string> {
        const onLoad = new Promise<string>((resolve, reject) => {
            this.xhr.onreadystatechange = () => {
                const state = this.xhr.readyState;
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

export = Ajax;
