const fruits = ["Apple", "Banana", "Strawberry", "Mango", "Cherry", "Blackberry"];

// use filter to obtain an array from the original one 
// with fruit items that starts with letter B 
const fruitsStartsWithB = fruits.filter((fruitItem) => {
    return fruitItem.startsWith("B");
});

console.log(fruitsStartsWithB);

// filter array to obtain items with length > 5

const fruitsWithMoreLetters = fruits.filter((fruitItem) => {
    return fruitItem.length > 5;
});

console.log(fruitsWithMoreLetters);

// use map to obtain an array from the original one with changed items

const fruitsWithTaste = fruits.map((fruit, index) => {
    if (index === 1 || index === 3) {
        return fruit + " has sweet taste.";
    } else {
        return fruit + " has sour taste.";
    }
});

console.log(fruitsWithTaste);

// use map to check if a fruit item contain duplicates and add text contain or not contain duplicates

const fruitsWithDuplicates = fruits.map((fruit) => {
    if (new Set(fruit).size === fruit.length) {
        return `${fruit} has no duplicates`;
    } else {
        return `${fruit} has duplicates`;
    };
});

console.log(fruitsWithDuplicates);

// use reduce to find item with maximum length from array

const maxLengthItem = fruits.reduce((firstFruit, secondFruit) => {
    return firstFruit.length > secondFruit.length ? firstFruit : secondFruit;
});

console.log(maxLengthItem);

// use reduce to create an object with fruits as keys and their length as values

const fruitsObj = fruits.reduce((firstF, secondF) => {
    firstF[secondF] = secondF.length;
    return firstF;
}, {});

console.log(fruitsObj);


