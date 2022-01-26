export interface TNode<T> {
  data: T;
  children?: TNode<T>[];
  expanded?: boolean;
}
