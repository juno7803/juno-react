export interface Element {
  type: string;
  props: {
    children: Element[];
    [key: string]: any;
  };
}

export interface Props {}
