// ===== Buffer დავალებები =====

// 1) Buffer "Hello World"-დან და ბაიტები
const buf1 = Buffer.from("Hello World");
console.log("1) bytes:", buf1);

// 2) ტექსტი -> Buffer -> ისევ string
const text = "Sample Text";
const buf2 = Buffer.from(text);
const backToString = buf2.toString();
console.log("2) back to string:", backToString);

// 3) 10 ბაიტიანი buffer და შენი სახელი
const buf3 = Buffer.alloc(10);
buf3.write("Giorgi"); // შეცვალე შენი სახელით
console.log("3) name buffer:", buf3.toString());

// 4) ორი buffer-ის გაერთიანება
const b1 = Buffer.from("Hello ");
const b2 = Buffer.from("World");
const combined = Buffer.concat([b1, b2]);
console.log("4) combined:", combined.toString());

// 5) buffer-ების შედარება
const c1 = Buffer.from("abc");
const c2 = Buffer.from("abc");
const c3 = Buffer.from("xyz");

console.log("5) c1 equals c2:", c1.equals(c2)); // true
console.log("5) c1 equals c3:", c1.equals(c3)); // false


// ===== process დავალებები =====

// 6) process.pid
console.log("6) PID:", process.pid);

// 7) მიმდინარე ფოლდერი
console.log("7) CWD:", process.cwd());

// 8) ყველა არგუმენტი
console.log("8) argv:", process.argv);

// 9) თუ არგუმენტი არ არის
if (process.argv.length <= 2) {
  console.log("9) No argument");
  process.exit(0);
} else {
  console.log("9) arguments exist:", process.argv.slice(2));
}