const users = [
  { firstName: "Ana", lastName: "Kiknadze" },
  { firstName: "Giorgi", lastName: "Maisuradze" },
  { firstName: "Nino", lastName: "Kalandadze" }
];

const fullNames = users.map(user => `${user.firstName} ${user.lastName}`);
console.log(fullNames);
