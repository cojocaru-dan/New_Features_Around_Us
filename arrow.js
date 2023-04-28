// arrow function that returns the product of 2 numbers
// if we have a single statement inside body , and the statement returns a value, we can eliminate "{}" and "return", those are implicit
const multiply = (a, b) => a * b;

console.log(multiply(4, 5));

// if we have more than one statement inside body , we must use "{}" and "return"
const sumcalculation = (a, b) => {
    const additionalVal = 20;
    return a + b + additionalVal;
}

console.log(sumcalculation(7, 8));


// Arrow functions are very usefull form simple tasks or simple calculations
// example with map, filter or reduce arrow function can be used as callback

const arr1 = ["Pizza", "Rice", "Hot Dog", "Cheeseburger"];

const arr1WithReview = arr1.map(foodItem => {
    if (foodItem !== "Rice") {
        return "Include " + foodItem;
    }
    return "Don't include " + foodItem;
});

console.log(arr1WithReview);
// when we have one parameter we can eliminate parantheses "()"