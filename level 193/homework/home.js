// app.js

const os = require("os");

// ოპერაციული სისტემის სახელი
console.log("OS Type:", os.type());

// პლატფორმა
console.log("Platform:", os.platform());

// არქიტექტურა
console.log("Architecture:", os.arch());




const os = require("os");

// თავისუფალი RAM მეხსიერება (ბაიტებში)
console.log("Free Memory:", os.freemem());

// სრული RAM მეხსიერება (ბაიტებში)
console.log("Total Memory:", os.totalmem());

/*
freemem() -> რამდენი RAM არის თავისუფალი ამ მომენტში
totalmem() -> კომპიუტერის სრული RAM მოცულობა
*/








const os = require("os");

console.log("System uptime:", os.uptime(), "seconds");














const os = require("os");

const cpus = os.cpus();

// CPU-ების რაოდენობა
console.log("CPU Count:", cpus.length);

// თითოეული CPU-ს მოდელი
cpus.forEach((cpu, index) => {
  console.log(`CPU ${index + 1}: ${cpu.model}`);
});













const os = require("os");

// მომხმარებლის მთავარი ფოლდერი
console.log("Home Directory:", os.homedir());

// კომპიუტერის სახელი
console.log("Hostname:", os.hostname());
















// პროცესის ID
console.log("Process ID:", process.pid);

// მიმდინარე პლატფორმა
console.log("Platform:", process.platform);

// Node.js ვერსია
console.log("Node Version:", process.version);

/*
process.pid -> მიმდინარე პროგრამის უნიკალური ID
process.platform -> რომელ პლატფორმაზე მუშაობს Node.js
process.version -> Node.js-ის ვერსია
*/