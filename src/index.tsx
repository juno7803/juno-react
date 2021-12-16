import { Element } from 'types';

function createElement(type: string, props: any, ...children: Element[]) {
  return {
    type,
    props: {
      ...props,
      children: children.map((child) =>
        typeof child === 'object' ? child : createTextElement(child)
      ),
    },
  };
}

function createTextElement(text: string) {
  return {
    type: 'TEXT_ELEMENT',
    props: {
      nodeValue: text,
      children: [],
    },
  };
}

function render(element: Element, container: HTMLElement | Text) {
  const dom =
    element.type == 'TEXT_ELEMENT'
      ? document.createTextNode('')
      : document.createElement(element.type);
  const isProperty = (key: string) => key !== 'children';
  Object.keys(element.props)
    .filter(isProperty)
    .forEach((name) => {
      dom[name] = element.props[name];
    });
  element.props.children.forEach((child) => render(child, dom));
  container.appendChild(dom);
}

const junoReact = {
  createElement,
  render,
};

const element = (
  <div>
    <h1>캡스톤 디자인 2</h1>
  </div>
);

const $root = document.getElementById('root') as HTMLElement;
junoReact.render(element, $root);
