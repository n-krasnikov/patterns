class Observer {
  constructor() {
    this.subscribers = [];
  }
    
  subscribe(callback) {
    this.subscribers.push(callback);
  }
    
  unsubscribe(callback) {
    this.subscribers = this.subscribers.filter((subscriber, key) => subscriber !== callback);
  }
    
  notify() {
    this.subscribers.forEach(subscriber => subscriber.call());
  }
};
  
export default Observer;

