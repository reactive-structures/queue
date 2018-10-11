import { Action } from '@reactive-redux/store';

export enum QueueActions {
  ENQUEUE = '[Queue] Enqueue item',
  DEQUEUE = '[Queue] Dequeue item',
  CLEAR = '[Queue] Clear stack'
}

export class Enqueue<T> implements Action {
  readonly type = QueueActions.ENQUEUE;

  constructor(public payload: T) {}
}

export class Dequeue implements Action {
  readonly type = QueueActions.DEQUEUE;
}

export class Clear implements Action {
  readonly type = QueueActions.CLEAR;
}
