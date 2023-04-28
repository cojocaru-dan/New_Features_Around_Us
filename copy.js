const vehicle = {
    category: "B",
    brand: "Toyota",
    engine: {
        type: "internal combustion",
        cilinders: 4,
        power: 110
    },
    fuelConsumption: 0.06,
    isElectric: false 
};

//create a copy with spread operator
const vehicleShallowCopy = {
    ...vehicle
};

console.log(vehicleShallowCopy);
// change the brand of the copied vehicle doesn't change the brand of the original vehicle
vehicleShallowCopy.brand = "Suzuki";

console.log(vehicle);
console.log(vehicleShallowCopy);

// Change the power property of the engine object change also the original object
// because engine points to the same object (it is pass by reference)

vehicleShallowCopy.engine.power = 166;
// both of them (vehicle and vehicleShallowCopy) have now power 166
console.log(vehicle);
console.log(vehicleShallowCopy);


const vehicleDeepCopy = JSON.parse(JSON.stringify(vehicle));
console.log(vehicleDeepCopy);
// now with deep copy object and all his properties points to differrent objects than the original object
// now any change made on this object won't affect the original one.
vehicleDeepCopy.brand = "Honda";
vehicleDeepCopy.engine.power = 222;

console.log(vehicle);
console.log(vehicleDeepCopy);


// second method to create a shallow copy
// the engine is an object and it is pass by reference. This means changing engine of one of the vechicle objects
// will afect both of the vehicle objects.
// in this case will affect also the first shallow copy because that vehicle also points to the same engine object. 
const vehicleShallowCopy2 = Object.assign({}, vehicle);
console.log(vehicleShallowCopy2);

// modify cilinders
vehicleShallowCopy2.engine.cilinders = 6;
console.log(vehicle);
console.log(vehicleShallowCopy);
console.log(vehicleShallowCopy2);