import { Singleton } from './src'
import { Module } from './src'
import { Observer } from './src'
import { Factory } from './src'
import { Facade } from './src'
import { Pilot } from './src/Facade'
import { Decorator } from './src'
import { Pizza } from './src/Decorator'
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

let count = 0;
let slowCount = 0;
  
const Obs = new Observer();

const incCount = () => count++;
const slowIncCount = () => setTimeout(() => slowCount++, 5000);

const get = () => console.log(count);
const getSlow = () => console.log(slowCount);

Obs.subscribe(incCount);
Obs.subscribe(slowIncCount);

Obs.subscribe(get);
Obs.subscribe(getSlow);

document.addEventListener('click', () => Obs.notify());

/*-----------------------------*/

const factory = new Factory();
const cat = factory.create('cat', 'John', '5')
const dog = factory.create('dog', 'Abram', '2')
const rabbit = factory.create('rabbit', 'Bucks', '9')

cat.say()
dog.say()
rabbit.say()

/*-----------------------------*/

const facade = new Facade()
const pilot1 = new Pilot('John')
const pilot2 = new Pilot('Richard')
pilot2.ill();
facade.flyable(pilot1, 'today')
facade.flyable(pilot2, 'today')
facade.flyable(pilot1, 'tomorrow')
facade.flyable(pilot2, 'tomorrow')
pilot2.recover();
facade.flyable(pilot2, 'today')
facade.flyable(pilot2, 'tomorrow')

/*-----------------------------*/

const pizza1 = new Pizza();
const pizza2 = new Pizza();
const pizza3 = new Pizza();

Decorator(pizza1, 'small')
Decorator(pizza2, null)
Decorator(pizza3, 'large')

console.log(pizza1)
console.log(pizza2)
console.log(pizza3)

/*-----------------------------*/

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Design Patterns</h1>
  </div>
`