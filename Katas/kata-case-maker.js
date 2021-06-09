var camelCase = function (input) {
  // Your code here
  var x;
  for (var i = 0; i < input.length; i++) {
    if (input[i] === " ") {
      x = input.charAt(i + 1).toUpperCase();
      input = input.slice(0, i) + x + input.slice(i + 2);
    }
  }
  return input;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
