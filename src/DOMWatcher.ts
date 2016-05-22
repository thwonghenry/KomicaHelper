import EventEmitter from './EventEmitter';

export default class DOMWatcher extends EventEmitter {
    private parent: HTMLElement;
    private observer: MutationObserver;

    constructor(parent: HTMLElement) {
        super();
        this.parent = parent;
    }

    // install the observer
    public start(): void {
        this.observer = new MutationObserver((mutations: MutationRecord[], observer: MutationObserver) => {
            if (this.hasSubscriber('update')) {
                this.emit('update');
            }
            // only continue if both event callback exists
            if (!this.hasSubscriber('addnode') && !this.hasSubscriber('removenode')) {
                return;
            }

            mutations.forEach((mutation: MutationRecord) => {
                // for each event type, trigger the callback
                if (this.hasSubscriber('addnode')) {
                    for (let i: number = 0; i < mutation.addedNodes.length; i++) {
                        this.emit('addnode', mutation.addedNodes[i]);
                    }
                }
                if (this.hasSubscriber('removenode')) {
                    for (let i: number = 0; i < mutation.removedNodes.length; i++) {
                        this.emit('removenode', mutation.removedNodes[i]);
                    }
                }
            });
        });

        // attach a DOM watcher on the parent element
        this.observer.observe(this.parent, {
            childList: true,
        });
    }

    public stop(): void {
        if (this.observer) {
            this.observer.disconnect();
        }
        delete this.observer;
    }
}
