// create 2 global scope variables with let and var
let letVariable = 3;
var varVariable = "Jim";

console.log(letVariable);
console.log(varVariable);

// global variables can be modified from anywhere in the file
// can modify those variable in a inner block of code

for (let index = 0; index < 2; index++) {
  letVariable += 2;
  varVariable += " Carey";
}

console.log(letVariable);
console.log(varVariable);

// create 2 var with let and const and try to redeclare them in a inner block

let var1 = "Landscape";
const var2 = [4, 6, 8]; // those are global scope variables

{
  // can redeclare with same name because it is in another scope
  let var1 = "Chocolate"; // those are block scope variables
  const var2 = [35, 70];
  console.log(var1); 
  console.log(var2);
}

console.log(var1);
console.log(var2);


function testVar() {
  var x = 1;
  if (true) {
    var x = 2; // same variable!
    console.log(x); // 2
  }

  console.log(x); // 2
}

testVar();
// var keyword create global scope or function scope variables

function testLet() {
  let x = 1;
  {
    let x = 2; // different variable
    // this variable can't be access outside this block
    console.log(x); // 2
  }
  console.log(x); // 1
}

testLet();


// const variable needs to be initialized when it is declared

const var3 = ["Apples", "Oranges", "Bananas"];

// const var3 = [55, 77];
// cannot redeclare a variable already created with let or const in the same scope
// cannot reassign other value to a const variable, but can change his items

var3.push("Kiwis");
console.log(var3);

if (var3.length === 4) {
  const var3 = ["Apricots", "Berries"]; // different variable
  console.log(var3);
}

console.log(var3);