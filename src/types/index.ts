export interface Element {
  type: string;
  props: {
    children: Element[];
    [key: string]: any;
  };
}

export interface Props {}

export interface Fiber {
  type?: string | Function;
  dom: HTMLElement | Text | null;
  parent?: Fiber;
  child?: Fiber;
  sibling?: Fiber;
  effectTag?: 'PLACEMENT' | 'UPDATE' | 'DELETION';
  alternate: Fiber | null;
  props: {
    children: Array<Element | Fiber>;
    [key: string]: any;
  };
}
