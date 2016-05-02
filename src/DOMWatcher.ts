export default class DOMWatcher {
    private parent: HTMLElement;
    private subscribers: {[eventType: string]: [Function]};

    constructor(parent: HTMLElement) {
        this.parent = parent;
        this.subscribers = {};
    }

    // client attaches the event callback actively

    public on(eventType: string, callback: Function): void {
        if (!this.subscribers[eventType]) {
            this.subscribers[eventType] = [callback];
        } else {
            this.subscribers[eventType].push(callback);
        }
    }

    public off(eventType: string, callback: Function): void {
        if (!this.subscribers[eventType]) {
            return;
        }
        const index: number = this.subscribers[eventType].indexOf(callback);
        if (index > -1) {
            this.subscribers[eventType].splice(index, 1);
        }
    }

    // install the observer
    public start(): void {
        const mutationObserver: MutationObserver = new MutationObserver((mutations: MutationRecord[], observer: MutationObserver) => {
            if (this.hasSubscriber('update')) {
                this.dispatch('update');
            }
            // only continue if both event callback exists
            if (!this.hasSubscriber('addnode') && !this.hasSubscriber('removenode')) {
                return;
            }

            mutations.forEach((mutation: MutationRecord) => {
                // for each event type, trigger the callback
                if (this.hasSubscriber('addnode')) {
                    for (let i: number = 0; i < mutation.addedNodes.length; i++) {
                        this.dispatch('addnode', mutation.addedNodes[i]);
                    }
                }
                if (this.hasSubscriber('removenode')) {
                    for (let i: number = 0; i < mutation.removedNodes.length; i++) {
                        this.dispatch('removenode', mutation.removedNodes[i]);
                    }
                }
            });
        });

        // attach a DOM watcher on the parent element
        mutationObserver.observe(this.parent, {
            childList: true,
        });
    }

    private hasSubscriber(eventType: string): boolean {
        return this.subscribers[eventType] && this.subscribers[eventType].length > 0;
    }

    private dispatch(eventType: string, ...args: any[]): void {
        if (this.hasSubscriber(eventType)) {
            this.subscribers[eventType].forEach((callback: Function) => callback(...args));
        }
    }


}
