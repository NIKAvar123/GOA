let animal = [
    ['lion', '16', '180', 'true'],
    ['hippo', '23', '400', 'false'],
    ['wolf', '10', '45', 'true']
];

let AAnimals = [];
for (let i = 0; i < animal.length; i++) {
    AAnimals.push(animal[i].join('-'));
}

console.log(AAnimals);
