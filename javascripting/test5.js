const ingredientCheck = function (bakery, recipes) {
  var sameIngredients = [];
  for (let i = 0; i < bakery.length; i++) {
    for (let b = 0; b < recipes.ingredients; b++) {
      if (bakery[i] === recipes.ingredients[b]) {
        sameIngredients = [bakery[i]];
      }
    }
  }
  return sameIngredients;
};

let bakeryA = ["saffron", "eggs", "tomato paste", "coconut", "custard"];
let bakeryB = ["milk", "butter", "cream cheese"];
let recipes = [
  {
    name: "Coconut Sponge Cake",
    ingredients: ["coconut", "cake base"],
  },
  {
    name: "Persian Cheesecake",
    ingredients: ["saffron", "cream cheese"],
  },
  {
    name: "Custard Surprise",
    ingredients: ["custard", "ground beef"],
  },
];

console.log(ingredientCheck(bakeryA, recipes));
