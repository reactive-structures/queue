import { Store } from '@reactive-redux/store';
import { IQueue } from './reducers';
export declare class Queue<T> extends Store<IQueue<T>> {
    peek$: import("rxjs/internal/Observable").Observable<T>;
    size$: import("rxjs/internal/Observable").Observable<number>;
    isEmpty$: import("rxjs/internal/Observable").Observable<boolean>;
    constructor(initialQueue?: T[]);
    enqueue(item: T): void;
    dequeue(): void;
    clear(): void;
}
