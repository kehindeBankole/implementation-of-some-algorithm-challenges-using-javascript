// You are free to use alternative approaches of
// instantiating the EventEmitter as long as the
// default export is correct.

// You are free to use alternative approaches of
// instantiating the EventEmitter as long as the
// default export is correct.

class EventEmitter {
  constructor() {
     this.events = {};
   }
 
   on(eventName, listener) {
     if (!this.events[eventName]) {
       this.events[eventName] = []
     }
     this.events[eventName].push(listener);
     return this;
   }
 
   off(eventName, listener) {
     if (!this.events[eventName]) return this;
     const listeners = this.events[eventName]
     const index = listeners.indexOf(listener);
     if (index !== -1) {
       listeners.splice(index, 1);
     }
     return this;
   }
 
   emit(eventName, ...args) {
     if (!this.events[eventName]) return false;
     const listeners = this.events[eventName];
     listeners.forEach(listener => listener(...args));
     return true;
   }
 }

 const emitter = new EventEmitter();

 function addTwoNumbers(a, b) {
   console.log(`The sum is ${a + b}`);
 }
 emitter.on('foo', addTwoNumbers);
 emitter.emit('foo', 2, 5);
 // > "The sum is 7"
 
 emitter.on('foo', (a, b) => console.log(`The product is ${a * b}`));
 emitter.emit('foo', 4, 5);
 // > "The sum is 9"
 // > "The product is 20"
 
 emitter.off('foo', addTwoNumbers);
 emitter.emit('foo', -3, 9);
 // > "The product is -27"
