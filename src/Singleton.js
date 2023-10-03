class Singleton {
  constructor() {
    if (Singleton.instance) return Singleton.instance

    this.data = [];
    Singleton.instance = this;
  }

  add(value) {
    this.data.push(value);
    return this.data;
  }

  get() {
    return this.data.pop()
  }

  print() {
    console.log(this.data);
  }

  get length() {
    return this.data.length;
  }

}

export default Singleton;