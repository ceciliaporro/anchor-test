import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import { setupAnchors } from './anchors.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
    <div class="anchors">
      <a href="#anchor1">Anchor 1</a>
      <a href="#anchor2">Anchor 2</a>
      <a href="#anchor3">Anchor 3</a>
      <a href="#anchor4">Anchor 4</a>
    </div>
    <div id="targets" class="anchors"></div>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
setupAnchors(document.querySelector<HTMLDivElement>('#targets')!)
