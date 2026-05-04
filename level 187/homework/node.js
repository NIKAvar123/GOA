const EventEmitter = require('events');

// 1) შექმნა
const emitter = new EventEmitter();

// hello event
emitter.on('hello', () => {
  console.log('Hello World');
});

// 2) greet event
emitter.on('greet', (name) => {
  console.log(`Hello, ${name}`);
});

// 3) ორი listener ერთ event-ზე (login)
emitter.on('login', () => {
  console.log('User logged in');
});

emitter.on('login', () => {
  console.log('Welcome back!');
});

// 4) sum event
emitter.on('sum', (a, b) => {
  console.log(a + b);
});

// 5) error event
emitter.on('errorEvent', () => {
  console.log('Something went wrong');
});

//  გამოძახებები 
emitter.emit('hello');            // Hello World
emitter.emit('greet', 'Giorgi'); // Hello, Giorgi
emitter.emit('login');           // User logged in + Welcome back!
emitter.emit('sum', 5, 7);       // 12
emitter.emit('errorEvent');      // Something went wrong