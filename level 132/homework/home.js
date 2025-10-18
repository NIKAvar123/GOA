// ფუნქციების შექმნა და ექსპორტი
export function add(a, b) {
  return a + b;
}

export function multiply(a, b) {
  return a * b;
}



// იმპორტი
import { add, multiply } from './math.js';

console.log(add(2, 3));        // 5
console.log(multiply(3, 4));   // 12



let count = 0;

export function inc() {
  count++;
}

export function get() {
  return count;
}
