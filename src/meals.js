var meals = ['breakfast', 'lunch', 'dinner'];
meals.push('supper');
console.log(meals.slice());
meals.forEach(function(currentValue, index, arr){
  console.log("Foreach iteration");
  console.log(index, currentValue, arr);
});

console.log(meals[1]);
console.log(meals[meals.length - 1]);

var mealsCopy = meals.slice();
console.log(mealsCopy);
