const people = [
    { name: "ლადო", age: 28, height: 165, gender: "კაცი" },
    { name: "გელა", age: 35, height: 180, gender: "კაცი" },
    { name: "საშა", age: 22, height: 158, gender: "კაცი" },
    { name: "დოდო", age: 40, height: 175, gender: "კაცი" },
    { name: "ნუგზარი", age: 30, height: 170, gender: "კაცი" }
];

people.forEach((person, index) => {
    console.log(`${index + 1}) ადამიანი:`);
    console.log(`სახელი: ${person.name},`);
    console.log(`ასაკი: ${person.age},`);
    console.log(`სიმაღლე: ${person.height} cm,`);
    console.log(`სქესი: ${person.gender}\n`);
});
