import { Action } from '@reactive-redux/store';
export declare enum QueueActions {
    ENQUEUE = "[Queue] Enqueue item",
    DEQUEUE = "[Queue] Dequeue item",
    CLEAR = "[Queue] Clear stack"
}
export declare class Enqueue<T> implements Action {
    payload: T;
    readonly type: QueueActions;
    constructor(payload: T);
}
export declare class Dequeue implements Action {
    readonly type: QueueActions;
}
export declare class Clear implements Action {
    readonly type: QueueActions;
}
