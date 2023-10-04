class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  say() {
    console.log(`My name is ${this.name}. I'm ${this.age} years old.`);
  }
}

class Dog extends Animal {
  say() {
    console.log(`Bark! ${this.name}`);
  }
}

class Cat extends Animal {
  say() {
    console.log(`Meow! ${this.name}`);
  }
}

class AnimalFactory {
  create (type, name, age) {
    let animal
    switch (type) {
      case 'cat': {
        animal = new Cat(name, age);
        break
      }
      case 'dog': {
        animal = new Dog(name, age);
        break;
      }
      default: {
        animal = new Animal(name, age);
      }
    }
    return animal;
  }
}

export default AnimalFactory;
