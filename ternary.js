const people = [
  {
    name: "Alice",
    age: 22
  },
  {
    name: "Billy",
    age: 17
  },
  {
    name: "Christian",
    age: 35
  }
];

const isAdult = (person) => {
  // ternary operator
  return person.age >= 18 ? person.name + " is adult." : person.name + " is not an adult yet.";
}

const checkAge = people.reduce((person1, person2) => {
  return person1 + isAdult(person2) + "\n";
}, "");

console.log(checkAge);

// can use nested ternary operator
const glycemicIndex = 133;
const glycemicRating = glycemicIndex > 250 ? "Extremely high"
                     : glycemicIndex > 150 ? "High"
                     : glycemicIndex > 100 ? "Above Medium"
                     : glycemicIndex > 80  ? "Normal range"
                     : "Low range";

console.log(glycemicRating);

// switch case with ternary operator
let toggleCase = true;
for (let i = 0; i < 5; i++) {
  toggleCase = toggleCase ? false : true;
  console.log(toggleCase);
}