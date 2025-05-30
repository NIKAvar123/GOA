const person1 = {
  name: "ნიკა",
  lastname: "მუმლაძე",
  age: 25,
  height: 175,
  
  // მეთოდი #1  ობიექტის შიგნით 
  fullName() {
    return this.name + " " + this.lastname;
  },

  // მეთოდი #2  ფუნქციის მინიჭება როგორც მნიშვნელობა
  sayHello: function() {
    return `გამარჯობა, მე ვარ ${this.name}`;
  }
};


console.log(person1.fullName()); 
console.log(person1.sayHello());  
