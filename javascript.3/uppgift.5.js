// Truthy and falsy values help in conditional statements. A truthy value is a value
// that is considered true in Boolean context.

// Task 1: Create an array called `values` containing the following values:
// 0, "hello", null, undefined, false, "false", -1 and "JavaScript".
let values = [0, "hello", null, undefined, false, "false", -1, "JavaScript"];
// Task 2: Write a function called `checkTruthiness` that takes a value and
// logs whether it is truthy or falsy.
function checkTruthiness(arr) {
  if (arr) {
    console.log("Value is truthy!");
  } else {
    console.log("Value is falsy!");
  }
}

// Task 3: Loop through the `values` array using forEach and call `checkTruthiness` on each value.
values.forEach((element) => {
  checkTruthiness(element);
});
// Task 4. Loop through the `values` array using a for-loop and call `checkTruthiness` on each value.
for (let i = 0; i < values.length; i++) {
  checkTruthiness(values[i]);
}
// Task 5. Loop through the `values` array using a while-loop and call `checkTruthiness` on each value.
i = 0;
while (i < values.length) {
  checkTruthiness(values[i]);
  i++;
}
