import { QueueActions, Enqueue, Dequeue, Clear } from './actions';

export type IQueue<T> = T[];

export const enqueue = (state: IQueue<any>, action: Enqueue<any>) => [
  ...state,
  action.payload
];

export const dequeue = (state: IQueue<any>, action: Dequeue) => {
  const newState = [...state];
  newState.shift();
  return newState;
};

export const clear = (state: IQueue<any>, action: Clear) => [];

export const reducerMap = new Map<any>([
  [QueueActions.ENQUEUE, enqueue],
  [QueueActions.DEQUEUE, dequeue],
  [QueueActions.CLEAR, clear]
]);
