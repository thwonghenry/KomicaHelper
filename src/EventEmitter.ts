export default class EventEmitter {
    private subscribers: { [topic: string]: [Function] };
    constructor() {
        this.subscribers = {};
    }

    public on(topic: string, callback: Function): void {
        if (!(topic in this.subscribers)) {
            this.subscribers[topic] = [callback];
        } else {
            this.subscribers[topic].push(callback);
        }
    }

    public off(topic: string, callback: Function): void {
        if (topic in this.subscribers) {
            const index: number = this.subscribers[topic].indexOf(callback);
            if (index > -1) {
                this.subscribers[topic].splice(index, 1);
            }
        }
    }

    protected emit(topic: string, ...args: any[]): void {
        if (topic in this.subscribers) {
            this.subscribers[topic].forEach((callback: Function) => callback(...args));
        }
    }

    protected hasSubscriber(eventType: string): boolean {
        return this.subscribers[eventType] && this.subscribers[eventType].length > 0;
    }
}
