import { Singleton } from './src'
import { Module } from './src'
import { Observer } from './src'
import './style.css'


/*----------------------------*/

const s1 = new Singleton();
s1.add(4)
s1.add(8)

const s2 = new Singleton();
s2.add(0)
s2.add(5)

s1.print() // Same objects
s2.print() // Same objects

/*----------------------------*/

console.log(Module.PI); // Private variable
console.log(Module.length(5)); // Public in return
console.log(Module.square(5)); // Public in return

/*----------------------------*/

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Design Patterns</h1>
  </div>
`