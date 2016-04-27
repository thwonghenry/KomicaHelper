export default class Ajax {
    private method: string;
    private url: string;
    private xhr: XMLHttpRequest;
    private type: string;

    constructor(method: string, url: string, type?: string) {
        this.method = method;
        this.url = url;
        this.xhr = new XMLHttpRequest();
        this.type = type;
    }

    public start(): Promise<any> {
        const onLoad: Promise<any> = new Promise<string>((resolve: (response: any) => any, reject: () => any) => {
            this.xhr.onload = () => {
                if (this.xhr.status === 200) {
                    resolve(this.xhr.response);
                } else {
                    console.log('reject', this.xhr.status);
                    reject();
                }
            };
            this.xhr.onerror = reject;
        });
        this.xhr.open(this.method, this.url, true);
        if (this.type) {
            this.xhr.responseType = this.type;
        }
        this.xhr.send();
        return onLoad;
    }
}
