const $root = document.getElementById('root')

const createTextNode = (text: string) => {
  return {
    type: 'TEXT_ELEMENT',
    props: {
      nodeValues: text,
      children: [],
    },
  }
}

const createElement = (type: any, props: any, ...children: any[]) => {
  return {
    type,
    props: {
      ...props,
      children: children.map((child) =>
        typeof child === 'object' ? child : createTextNode(child)
      ),
    },
  }
}

/** @jsx junoReact.createElement */
const junoReact = {
  createElement,
}
