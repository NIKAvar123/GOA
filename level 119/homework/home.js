function usersToMap(users) {
  const map = new Map();
  users.forEach(user => {
    map.set(user.name, user.age);
  });
  return map;
}

// მაგალითი:
const users = [
  { name: "ანა", age: 25 },
  { name: "ნიკო", age: 30 },
  { name: "ლევანი", age: 22 }
];

console.log(usersToMap(users)); // Map(3) { 'ანა' => 25, 'ნიკო' => 30, 'ლევანი' => 22 }


//-------------------------------------------------------------------------------------------

function uniqueNumbers(arr) {
  return Array.from(new Set(arr));
}

// მაგალითი:
const numbers = [1, 2, 3, 2, 4, 1, 5];
console.log(uniqueNumbers(numbers)); // [1, 2, 3, 4, 5]


//-------------------------------------------------------------------------------------------


function wordFrequency(sentences) {
  const map = new Map();
  for (const sentence of sentences) {
    const words = sentence.split(/\s+/);
    for (const word of words) {
      const lowerWord = word.toLowerCase();
      map.set(lowerWord, (map.get(lowerWord) || 0) + 1);
    }
  }
  return map;
}

// მაგალითი:
const sentences = [
  "ეს არის წინადადება",
  "ეს წინადადება მეორეა",
  "ეს არის ტესტი"
];
console.log(wordFrequency(sentences)); 
// Map {
//   'ეს' => 3,
//   'არის' => 2,
//   'წინადადება' => 2,
//   'მეორეა' => 1,
//   'ტესტი' => 1
// }



//-------------------------------------------------------------------------------------------


function extractUniqueIds(objects) {
  const ids = new Set();
  for (const obj of objects) {
    ids.add(obj.id);
  }
  return ids;
}

// მაგალითი:
const items = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
  { id: 1, name: "c" },
  { id: 3, name: "d" }
];

console.log(extractUniqueIds(items)); // Set(3) { 1, 2, 3 }



//-------------------------------------------------------------------------------------------

function intersection(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);
  const common = new Set();

  for (const word of set1) {
    if (set2.has(word)) {
      common.add(word);
    }
  }

  return common;
}

// მაგალითი:
const words1 = ["ვაშლი", "ბანანი", "სტაფილო", "კივი"];
const words2 = ["სტაფილო", "ბროკოლი", "კივი", "მსხალი"];

console.log(intersection(words1, words2)); // Set(2) { 'სტაფილო', 'კივი' }
