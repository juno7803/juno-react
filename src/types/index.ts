export interface Element {
  type: string;
  props: {
    children: Element[];
    [key: string]: any;
  };
}

export interface Props {}

export type SetStateAction<T> = (arg: T) => T;

export interface Hook<T> {
  state: T;
  queue: Array<SetStateAction<T> | T>;
}

export interface Fiber {
  type?: string | Function;
  dom: HTMLElement | Text | null;
  parent?: Fiber;
  child?: Fiber;
  sibling?: Fiber;
  effectTag?: 'PLACEMENT' | 'UPDATE' | 'DELETION';
  alternate: Fiber | null;
  hooks?: Array<Hook<any>>;
  props: {
    children: Array<Element | Fiber>;
    [key: string]: any;
  };
}
