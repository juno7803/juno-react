import { Element } from './types';

const createTextNode = (text: string) => {
  return {
    type: 'TEXT_ELEMENT',
    props: {
      nodeValues: text,
      children: [],
    },
  };
};

const createElement = (type: string, props?: any, ...children: any[]) => {
  return {
    type,
    props: {
      ...props,
      children: children.map((child) =>
        typeof child === 'object' ? child : createTextNode(child)
      ),
    },
  };
};

const render = (element: Element, container: HTMLElement) => {
  const dom =
    element.type === 'TEXT_ELEMENT'
      ? document.createElement('')
      : document.createElement(element.type);

  const isProperty = (key: string) => key !== 'children';
  Object.keys(element.props)
    .filter(isProperty)
    .forEach((name) => (dom[name] = element.props[name]));

  element.props.children.forEach((child) => render(child, dom));
  container.appendChild(dom);
};

/** @jsx junoReact.createElement */
const junoReact = {
  createElement,
  render,
};

const element = (
  <div>
    <h1>안녕하세요</h1>
  </div>
);

const $root = document.getElementById('root') as HTMLElement;
junoReact.render(element, $root);
