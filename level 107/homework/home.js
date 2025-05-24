const mixedArray = [42, "hello", true, "world", null, 99];

const mapped = mixedArray.map(item => typeof item === "string");

console.log(mapped);




const scores = [55, 72, 88, 45, 69, 91, 70];

const passed = scores.filter(score => score > 70);

console.log(passed);






const items = ["apple", "banana", "apple", "orange", "banana", "apple"];

const rdc = items.reduce((acc, item) => {
  acc[item] = (acc[item] || 0) + 1;
  return acc;
}, {});

console.log(rdc);


