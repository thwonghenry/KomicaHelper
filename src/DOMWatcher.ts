export default class DOMWatcher {
    private parent: HTMLElement;
    private onAddNodeCallback: (element: Node) => void;
    private onRemoveNodeCallback: (element: Node) => void;
    private onUpdateCallback: () => void;

    constructor(parent: HTMLElement) {
        this.parent = parent;
    }

    public onUpdate(onUpdateCallback: () => void): void {
        this.onUpdateCallback = onUpdateCallback;
    }

    public onAddNode(onAddNodeCallback: (element: Element) => void): void {
        this.onAddNodeCallback = onAddNodeCallback;
    }

    public onRemoveNode(onRemoveNodeCallback: (element: Element) => void): void {
        this.onRemoveNodeCallback = onRemoveNodeCallback;
    }

    public start(): void {
        const mutationObserver: MutationObserver = new MutationObserver((mutations: MutationRecord[], observer: MutationObserver) => {
            if (this.onUpdateCallback) {
                this.onUpdateCallback();
            }
            if (!this.onAddNodeCallback && !this.onRemoveNodeCallback) {
                return;
            }
            mutations.forEach((mutation: MutationRecord) => {
                // for all added nodes, bind the thumbnail to a button if exists
                if (this.onAddNodeCallback) {
                    for (let i: number = 0; i < mutation.addedNodes.length; i++) {
                        this.onAddNodeCallback(mutation.addedNodes[i]);
                    }
                }
                if (this.onRemoveNodeCallback) {
                    for (let i: number = 0; i < mutation.removedNodes.length; i++) {
                        this.onRemoveNodeCallback(mutation.removedNodes[i]);
                    }
                }
            });
        });

        // attach a DOM watcher on the parent element
        mutationObserver.observe(this.parent, {
            childList: true,
        });
    }
}
