var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
console.log("While loop - The ingredients are:");
var i = 0;
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
}

// Write a for loop that prints out the contents of ingredients:
console.log("For loop - The ingredients are:");
for (var i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:

console.log("For loop - The ingredients backwards are:");
for (var counter = ingredients.length - 1; counter >= 0; counter--){
  console.log(ingredients[counter]);
}