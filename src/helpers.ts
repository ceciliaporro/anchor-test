export const createElement = (selector: string) => {
  return document.createElement(selector)
}

export const createAnchor = () => {
  return createElement('a')
}

export const createDiv = () => {
  return createElement('div')
}