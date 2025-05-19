const names = ["ნიკა", "ანა", "თამარი", "დავით", "ალექსანდრე"];

names.forEach(name => {
  if (name.length > 5) {
    console.log(name);
  }
});




const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = [];

numbers.forEach(num => {
  if (num % 2 === 0) {
    evenNumbers.push(num);
  }
});

console.log(evenNumbers); 







const products = {
  "პური": 5,
  "ძეხვი": 15,
  "კარაქი": 8,
  "ყველი": 12
};

for (let product in products) {
  if (products[product] > 10) {
    console.log(product);
  }
}



const studentGrades = {
  "მათემატიკა": 45,
  "ფიზიკა": 88,
  "ქიმია": 50,
  "ქართული": 30,
  "ინგლისური": 95
};

let failedCount = 0;

for (let subject in studentGrades) {
  if (studentGrades[subject] < 51) {
    failedCount++;
  }
}

console.log(`ჩაჭრილი საგნების რაოდენობაა: ${failedCount}`); 
