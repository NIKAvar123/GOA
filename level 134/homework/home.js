const users = [
  { name: "Giga", age: 20, score: 50 },
  { name: "Nino", age: 25, score: 80 },
  { name: "Tiko", age: 22, score: 90 },
];

function topScorers(users, minScore) {
  return users
    .filter(user => user.score >= minScore)
    .sort((a, b) => b.score - a.score)
    .map(user => user.name);
}

console.log(topScorers(users, 60)); 



function flattenArray(arr) {
  let result = [];

  for (let item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(flattenArray(item)); 
    } else {
      result.push(item);
    }
  }

  return result;
}


console.log(flattenArray([1, [2, [3, 4], 5], 6])); 
