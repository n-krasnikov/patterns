import { Singleton } from './src'

import './style.css'



document.querySelector('#app').innerHTML = `
  <div>
    <h1>Design Patterns</h1>
  </div>
`

const s1 = new Singleton();
s1.add(4)
s1.add(8)

const s2 = new Singleton();
s2.add(0)
s2.add(5)

s1.print()
s2.print()

