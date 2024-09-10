import { createAnchor, createDiv } from './helpers.ts'

export function setupAnchors(element: HTMLDivElement) {
  element.style.marginTop = '500px'
  for (let i = 0; i < 4; i++) {
    const anchor = createAnchor()
    anchor.id = `anchor${i + 1}`
    const div = createDiv()
    div.innerHTML = `Anchor ${i + 1}`
    div.classList.add('anchorDiv')
    anchor.appendChild(div)
    element.appendChild(anchor)
  }
  setupScroll()
}

const setupScroll = () => {
  const anchors = document.querySelectorAll<HTMLAnchorElement>('.anchors a[href]')
  anchors.forEach(a => {
    a.addEventListener('click', (event) => {
      event.preventDefault()
      const anchor = document.querySelector(a.href.substring(a.href.length - 8))
      anchor?.scrollIntoView({ block: 'center' })
    })
  })
}