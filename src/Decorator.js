export class Pizza {
  constructor() {
    this.price = 100; 
  }
}

const sizeDecorator = (pizza, size) => {
  switch (size) {
    case 'small': {
      pizza.price *= 0.7
      pizza.size = size
      break;
    }
    case 'large': {
      pizza.price *= 1.3
      pizza.size = size
      break;
    }
    default: {
      pizza.size = 'medium'
    }
  }
}

export default sizeDecorator;
