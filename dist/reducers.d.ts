import { Enqueue, Dequeue, Clear } from './actions';
export declare type IQueue<T> = T[];
export declare const enqueue: (state: any[], action: Enqueue<any>) => any[];
export declare const dequeue: (state: any[], action: Dequeue) => any[];
export declare const clear: (state: any[], action: Clear) => any[];
export declare const reducerMap: Map<any, any>;
