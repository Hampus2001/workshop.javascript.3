// The spread operator allows you to expand elements of an array or object into another array or object.
// Example: `const newArray = [...oldArray]` creates a copy of oldArray.

const fruits = ["Apple", "Banana", "Orange"];

// Task 1: Use the spread operator to create a new array called `moreFruits` and add "Mango"
// and "Pineapple" to the end of the `fruits` array.
const moreFruits = [...fruits, "Mango", "Pineapple"];
console.log(moreFruits);
// Task 2: Use the spread operator to create a new array called `totalFruits` that starts with
// the `startingFruits` array and ends with the `moreFruits` array. Use console.log to print `totalFruits`.
const startingFruits = ["Pear", "Melon", "Kiwi"];
const totalFruits = [...fruits, ...moreFruits];
console.log(totalFruits);
// Task 3: Use the spread operator to create a new object called `updatedCar` and change the year to 2022.
// Use console.log to print `updatedCar`.
const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020,
};
const updatedCar = { ...car };
updatedCar.year = 2022;
console.log(updatedCar);
// Task 4: Use the spread operator to create a new object called `coloredCar`
// add a new property `color` with the value "Red" to the `updatedCar` object.
// Use console.log to print `coloredCar`.
const coloredCar = { ...updatedCar, color: "red" };
console.log(coloredCar);

// Task 5: Create a function called `updateCarModel` that takes an object and a new model as arguments
// and returns a new object with the updated model using the spread operator.
function updateCarModel(obj, newModel) {
  const newObject = { ...obj, model: newModel };
  return newObject;
}
// Task 6: Use the `updateCarModel` function to update the model of `coloredCar` to "Camry" and store
// it in a variable called `newModelCar`. Use console.log to print `newModelCar`.
/* const newModelCar = updateCarModel(...coloredCar, "Camry"); */
const newModelCar = updateCarModel(coloredCar, "Carmy");
console.log(newModelCar);
