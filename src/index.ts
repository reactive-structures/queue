import { Store, select } from '@reactive-redux/store';
import { reducerMap, IQueue } from './reducers';
import { Enqueue, Dequeue, Clear } from './actions';

export class Queue<T> extends Store<IQueue<T>> {
  peek$ = this.state$.pipe(select(queue => queue[0]));
  size$ = this.state$.pipe(select(queue => queue.length));
  isEmpty$ = this.state$.pipe(select(queue => queue.length === 0));

  constructor(initialQueue: T[] = []) {
    super(initialQueue, reducerMap);
  }

  enqueue(item: T) {
    this.dispatch(new Enqueue(item));
  }

  dequeue() {
    this.dispatch(new Dequeue());
  }

  clear() {
    this.dispatch(new Clear());
  }
}
